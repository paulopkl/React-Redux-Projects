import React from 'react';
import Filho from './Filho';

export default function() {

    let lugarInformado = 'Nenhum lugar informado';

    const notificarSaidaDoFilho = lugar => {
        lugarInformado = lugar;
        alert(`Liberado para ${lugar}`);
    }

    return (
        <div>
            {lugarInformado}
            <Filho notificarSaida={notificarSaidaDoFilho} />
        </div>
    );
}