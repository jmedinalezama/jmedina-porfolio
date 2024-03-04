import './Technology.css'

export function Technology ({ technology }) {
  const { icon: IconTech, name, color } = technology

  return (
    <article className='thecnology-item' style={{ border: `2px solid ${color}` }}>
      <div>
        <IconTech />
      </div>
      <p style={{ color: `${color}` }}>{name}</p>
    </article>
  )
}
