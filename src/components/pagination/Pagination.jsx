function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        ◀ Anterior
      </button>

      <span className="pagination-info">
        Page {page} of {totalPages}
      </span>

      <button
        className="pagination-button"
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
      >
        Seguinte ▶
      </button>
    </div>
  );
}
export default Pagination;
