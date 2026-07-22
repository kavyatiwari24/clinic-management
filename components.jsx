export function Badge({children}) { return <span className={'badge '+String(children).toLowerCase().replaceAll(' ','-')}>{children}</span> }
export function StatCard({label,value,note,accent='blue'}) { return <section className={'stat-card '+accent}><p>{label}</p><strong>{value}</strong><small>{note}</small></section> }
export function Empty({title,text}) { return <div className="empty"><div>⌁</div><h3>{title}</h3><p>{text}</p></div> }
export function Modal({title,children,onClose}) { return <div className="modal-backdrop" onMouseDown={onClose}><section className="modal" onMouseDown={e=>e.stopPropagation()}><div className="modal-title"><h2>{title}</h2><button className="icon-btn" onClick={onClose}>×</button></div>{children}</section></div> }
