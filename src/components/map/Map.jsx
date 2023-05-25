import s from './Map.module.css'

const Map = () => {
  return (
    <div className={s.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792397!2d13.372469776597306!3d52.50793287205792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sde!2sde!4v1684693000281!5m2!1sde!2sde" width="1440" height="525" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
