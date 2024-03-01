import BtnAdd from './en-tete/BtnAdd'
import Title from './en-tete/Title'

export default function EnTete() {
  return (
    <div style={{
        display : 'flex',
        gap : '70px',
        alignItems : 'center'
    }}>
        <Title/>
        <BtnAdd/>
    </div>
  )
}

