import React from 'react'
import bank from '../images/bank.png'
import nbfc from '../images/NBFC.jpg'
import smes from '../images/smes.jpg'
import corporates from '../images/corporates1.jpg'

export default function textbook3() {
    const clientData = [
        { key: 1, alt: 'Banks', src:bank, title: 'Banks' },
        { key: 2, alt: 'NBFCs', src: nbfc, title: 'NBFCs' },
        { key: 3, alt: 'Corporates', src: corporates, title: 'Corporates' },
        { key: 4, alt: 'SMEs', src: smes , title: 'SMEs' }
    ];
  return (
    <div id="customers" className="container  my-5 ">
        <div className='container my-5 border-top border-bottom'>
    <div className="clientstitle text-center my-4" >
        <h2>Our Clients</h2>
    </div>
    <div className="row text-center">
        {clientData.map((client) => (
            <div key={client.key} className="col-md-3 col-sm-6 mb-4">
                <div className="client-box">
                    <img src={client.src} alt={client.alt} className="img-fluid" />
                    <h5 className="mt-3">{client.title}</h5>
                </div>
            </div>
        ))}
    </div>
</div>
    </div>
  )
}
