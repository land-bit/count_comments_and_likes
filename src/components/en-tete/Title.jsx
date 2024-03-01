import logo from '../../assets/icons/logo.svg'

export default function Title() {
  return (
    <div style={{
        display : 'flex',
        gap : '10px'
    }}>
        <img src={logo} alt="Logo" />
        <h1>Vous avez 30 commentaires et 24 likes</h1>
    </div>
  )
}
