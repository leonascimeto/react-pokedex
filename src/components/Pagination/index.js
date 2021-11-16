import React, { useState, useCallback, useEffect } from 'react';
import * as S from './styles';
// //imagens
import left from '../../assets/icons/left.png';
import right from '../../assets/icons/right.png';

//quantidade de botões
const MAX_ITEMS = 5;

const Pagination = ({ page, totalPages, setPage, loading }) => {


  const [optionsButtons, setOptionsButtons] = useState([])




  const generatedOptions = useCallback(() => {
    const arrayOptions = [];
    let firstButton = page - Math.floor(MAX_ITEMS / 2);
    let lastButton = page + Math.floor(MAX_ITEMS / 2);

    if (firstButton < 1) {
      firstButton = 1;
      lastButton = 5;
    }

    if (lastButton > totalPages) {
      lastButton = totalPages;
      firstButton = totalPages - MAX_ITEMS + 1;
    }

    for (let i = firstButton; i <= lastButton; i++) {
      arrayOptions.push(i)
    }

    setOptionsButtons(arrayOptions);
  }, [page, totalPages])

  const controls = {
    next() {
      !loading && setPage(page + 1);
    },
    prev() {
      !loading && setPage(page - 1);
    },
    goTo(page) {
      !loading && setPage(page);
    }
  }

  useEffect(() => {
    generatedOptions();
  }, [generatedOptions]);

  return (
    <div>
      <S.Container>
        <button
          className="arrow"
          onClick={controls.prev}
          disabled={(page <= 1)}>

          <img src={left} alt="Anterior" />

        </button>
        {
          optionsButtons.map((option, index) => <button key={index} className={(option === page) ? 'number active' : 'number'} onClick={() => controls.goTo(option)} >{option}</button>)
        }
        <button
          className="arrow"
          onClick={controls.next}
          disabled={(page >= totalPages)}>
          <img src={right} alt="Próximo" />
        </button>

      </S.Container>
    </div>
  )
}

export default Pagination;
