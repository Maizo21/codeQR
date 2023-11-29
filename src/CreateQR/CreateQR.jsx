import React from 'react'
import './CreateQR.css'

const CreateQR = () => {

    const handleSubmit = (e) => {

        e.preventDefault()
        let inputVal = document.querySelector('input').value
        let button = document.querySelector('form.create button')

        if (inputVal === '' || inputVal === null || inputVal === undefined || inputVal === ' ' || !inputVal.includes('http')) {
            button.style.backgroundColor = '#ff0000'
            button.style.color = '#fff'
            setTimeout(() => {
                button.style.backgroundColor = '#235299'
                button.style.color = '#fff'
            }, 1000)
        } else {
            let API = `http://api.qrserver.com/v1/create-qr-code/?data=${inputVal}&size=300x300`
            let img = document.querySelector('img.qr-created')
            img.src = API
            img.style.display = 'block'

            let save = document.querySelector('div.save-image')
            setTimeout(() => {
                save.style.display = 'block'
            }, 500)

            save.addEventListener('click', async () => {
                try {
                    const response = await fetch(API);
                    const blob = await response.blob();
            
                    const url = window.URL.createObjectURL(blob);
            
                    let link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'QR_Code.png');
                    link.style.display = 'none';
            
                    document.body.appendChild(link);
                    link.click();
            
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                } catch (error) {
                    console.error('Error al descargar la imagen:', error);
                }
            });
        }
    }

  return (
    <>
        <form className='create'>
            <input type="text" placeholder="Ingresa tu URL" />
            <button type="submit" onClick={handleSubmit} >Generar QR</button>
        </form>

        <img className='qr-created' src="" alt="QR creado" style={{display: 'none'}} />

        <div style={{display:'none'}} className='save-image'>
            Guardar imagen
        </div>

    </>
  )
}

export default CreateQR