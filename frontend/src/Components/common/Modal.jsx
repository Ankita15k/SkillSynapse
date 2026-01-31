export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-4">
        {title && (
          <h2 className="text-lg font-semibold mb-3">{title}</h2>
        )}

        <div>{children}</div>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 rounded bg-gray-100 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}