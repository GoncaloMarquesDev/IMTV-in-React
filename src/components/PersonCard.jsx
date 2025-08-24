function PersonCard({ img, name, role, children }) {
  return (
    <div className="actor-card">
      {children}
       {img ? (
      <div className="actor-image-wrapper">
        <img src={img} alt={name} />
      </div>
    ) : null}
      <p><strong>{name}</strong></p>
      {role && <p>{role}</p>}
    </div>
  );
}
export default PersonCard
// actor-image-wrapper

