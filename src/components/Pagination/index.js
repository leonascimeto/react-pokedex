import React, { useState, useEffect } from 'react';
import * as S from './styles';
// //imagens
import left from '../../assets/icons/left.png';
import right from '../../assets/icons/right.png';

//quantidade de botões
const MAX_ITEMS = 5;

const Pagination = ({ page, totalPages, setPage, loading }) => {
  let firstButton = page - Math.floor(MAX_ITEMS / 2);
  let lastButton = page + Math.floor(MAX_ITEMS / 2);

  const [optionsButtons, setOptionsButtons] = useState([2, 3, 4, 5, 6])

  const arrayOptions = [];

  function generatedOptions() {

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
  }

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
  }, [page])

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
          optionsButtons.map(option => <button key={option} className={(option === page) ? 'number active' : 'number'} onClick={() => controls.goTo(option)} >{option}</button>)
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
