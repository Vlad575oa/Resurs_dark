'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
    Upload, X, Image as ImageIcon, Trash2,
    Copy, Check, Plus, Loader2, FolderOpen, Film, FileText
} from 'lucide-react';

interface MediaFile {
    id: string;
    name: string;
    url: string;
    size: number;
    createdAt: string;
}

function formatSize(bytes: number) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1024 / 1024).toFixed(1) + ' MB';
}

function getIcon(name: string) {
    const ext = name.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'avif'].includes(ext)) return 'image';
    if (['mp4', 'webm', 'mov'].includes(ext)) return 'video';
    return 'file';
}

function MediaCard({ file, onDelete }: { file: MediaFile; onDelete: () => void }) {
    const [copied, setCopied] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const type = getIcon(file.name);

    async function copyUrl() {
        await navigator.clipboard.writeText(window.location.origin + file.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    async function handleDelete() {
        if (!confirm(`Удалить файл "${file.name}"?`)) return;
        setDeleting(true);
        const res = await fetch(`/api/admin/media?id=${encodeURIComponent(file.id)}`, { method: 'DELETE' });
        if (res.ok) onDelete();
        else { alert('Ошибка удаления'); setDeleting(false); }
    }

    return (
        <div className="group relative bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-200 hover:shadow-xl hover:shadow-black/30">
            {/* Preview */}
            <div className="aspect-video bg-black/20 flex items-center justify-center overflow-hidden">
                {type === 'image' ? (
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : type === 'video' ? (
                    <div className="flex flex-col items-center gap-2 text-slate-500">
                        <Film className="size-8" />
                        <span className="text-xs">Видео</span>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2 text-slate-500">
                        <FileText className="size-8" />
                        <span className="text-xs">Файл</span>
                    </div>
                )}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 gap-2">
                <div className="flex items-center gap-2">
                    <button
                        onClick={copyUrl}
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg py-1.5 px-2 transition-colors"
                    >
                        {copied ? <Check className="size-3 text-green-400" /> : <Copy className="size-3" />}
                        {copied ? 'Скопировано' : 'Копировать URL'}
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="flex items-center justify-center bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg p-1.5 transition-colors"
                    >
                        {deleting ? <Loader2 className="size-4 animate-spin" /> : <Trash2 className="size-4" />}
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="px-3 py-2.5">
                <p className="text-xs font-medium text-white truncate">{file.name}</p>
                <p className="text-[10px] text-slate-300 mt-0.5">{formatSize(file.size)}</p>
            </div>
        </div>
    );
}

// ─── Upload Modal ─────────────────────────────────────────────────────────────

function UploadModal({ onClose, onUploaded }: { onClose: () => void; onUploaded: () => void }) {
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setDragging(false);
        const dropped = Array.from(e.dataTransfer.files);
        setFiles(prev => [...prev, ...dropped]);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }

    function removeFile(idx: number) {
        setFiles(prev => prev.filter((_, i) => i !== idx));
    }

    async function handleUpload() {
        if (!files.length) return;
        setUploading(true);
        setProgress('Загрузка...');
        const formData = new FormData();
        files.forEach(f => formData.append('files', f));
        try {
            const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
            if (!res.ok) throw new Error('Upload failed');
            setProgress('✓ Загружено!');
            setTimeout(() => { onUploaded(); onClose(); }, 800);
        } catch {
            setProgress('Ошибка загрузки');
            setUploading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                    <div className="flex items-center gap-2">
                        <Upload className="size-4 text-blue-400" />
                        <h2 className="font-semibold text-white text-sm">Загрузить файлы</h2>
                    </div>
                    <button onClick={onClose} className="text-slate-300 hover:text-white transition-colors">
                        <X className="size-4" />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    {/* Drop zone */}
                    <div
                        onDragOver={e => { e.preventDefault(); setDragging(true); }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={handleDrop}
                        onClick={() => inputRef.current?.click()}
                        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${dragging ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}
                    >
                        <input ref={inputRef} type="file" multiple className="hidden" onChange={handleChange} accept="image/*,video/*,.pdf" />
                        <Upload className={`size-8 mx-auto mb-3 ${dragging ? 'text-blue-400' : 'text-slate-500'}`} />
                        <p className="text-sm font-medium text-white">Перетащите файлы сюда</p>
                        <p className="text-xs text-slate-300 mt-1">или нажмите для выбора · PNG, JPG, WebP, MP4, PDF</p>
                    </div>

                    {/* File list */}
                    {files.length > 0 && (
                        <ul className="space-y-2 max-h-48 overflow-y-auto">
                            {files.map((f, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2">
                                    <ImageIcon className="size-4 text-slate-500 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-slate-300 truncate">{f.name}</p>
                                        <p className="text-[10px] text-slate-600">{formatSize(f.size)}</p>
                                    </div>
                                    <button onClick={() => removeFile(idx)} className="text-slate-600 hover:text-red-400 transition-colors">
                                        <X className="size-3.5" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="px-6 pb-5 flex items-center justify-between gap-3">
                    {progress ? (
                        <p className="text-sm text-blue-400">{progress}</p>
                    ) : <div />}
                    <div className="flex items-center gap-3">
                        <button onClick={onClose} className="text-sm text-slate-300 hover:text-white transition-colors px-4 py-2">Отмена</button>
                        <button
                            onClick={handleUpload}
                            disabled={!files.length || uploading}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-all"
                        >
                            {uploading ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
                            {uploading ? 'Загрузка...' : `Загрузить ${files.length > 0 ? `(${files.length})` : ''}`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MediaVault() {
    const [media, setMedia] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState('');

    const fetchMedia = useCallback(async () => {
        setLoading(true);
        const res = await fetch('/api/admin/media');
        const data = await res.json();
        setMedia(data.media || []);
        setLoading(false);
    }, []);

    useEffect(() => { fetchMedia(); }, [fetchMedia]);

    const filtered = media.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-white">Медиа-хранилище</h1>
                    <p className="text-xs text-slate-300 mt-0.5">{media.length} файлов · /public/uploads/</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.5)]"
                >
                    <Plus className="size-4" /> Загрузить файлы
                </button>
            </div>

            {/* Search filter */}
            {media.length > 0 && (
                <input
                    type="text"
                    placeholder="Поиск по названию..."
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="w-full max-w-xs bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
                />
            )}

            {/* Grid */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-24 text-slate-600">
                    <Loader2 className="size-8 animate-spin mb-3 text-blue-500/50" />
                    <p className="text-sm">Загрузка файлов...</p>
                </div>
            ) : filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-slate-600">
                    <FolderOpen className="size-12 mb-4 text-slate-700" />
                    <p className="text-sm text-white mb-1">{media.length === 0 ? 'Нет загруженных файлов' : 'Ничего не найдено'}</p>
                    <p className="text-xs text-slate-300">
                        {media.length === 0 ? 'Нажмите «Загрузить файлы», чтобы добавить медиа' : 'Измените запрос поиска'}
                    </p>
                    {media.length === 0 && (
                        <button
                            onClick={() => setShowModal(true)}
                            className="mt-5 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                        >
                            <Plus className="size-4" /> Загрузить первый файл
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filtered.map(file => (
                        <MediaCard
                            key={file.id}
                            file={file}
                            onDelete={() => {
                                setMedia(prev => prev.filter(f => f.id !== file.id));
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Upload Modal */}
            {showModal && (
                <UploadModal
                    onClose={() => setShowModal(false)}
                    onUploaded={fetchMedia}
                />
            )}
        </div>
    );
}
