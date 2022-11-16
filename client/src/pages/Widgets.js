import React from 'react';

const Widgets = () => {
  return (
    <div className='d-flex' style={{alignItems:'center', justifyContent: 'center',}}>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.4590088011105!2d36.606470625309164!3d55.138171016925234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1337a5073c9279a2!2zNTXCsDA4JzEyLjQiTiAzNsKwMzYnMjMuNCJF!5e0!3m2!1sru!2sru!4v1668423405674!5m2!1sru!2sru"
          width="800" height="470" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
      </div>
      <div>
        <iframe frameBorder="no" scrolling="no" src="https://coronavirus-control.ru/oembed/coronavirus-russia/" height="450" width="300" style={{ maxWidth: '100%', margin: '20px', background: '#ffffff' }}></iframe>
      </div>
    </div>
  )
}


export default Widgets