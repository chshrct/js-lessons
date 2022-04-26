import React from "react";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";
import { CurrencyType } from "../../redux/currencyReducer";
import { ChangeActionAC, ChangeCurrencyFieldAC, СhangeCurrentCurrencyAC } from "../../redux/actions";import { useDispatch, useSelector } from "react-redux";
import { IGlobalState } from "../../redux/state";

const CurrencyEContainer: React.FC = () => {

    const currencies = useSelector((state:IGlobalState) => state.currency.currencies)
    const currentCurrency = useSelector((state:IGlobalState) => state.currency.currentCurrency)
    const isBuying = useSelector((state:IGlobalState) => state.currency.isBuying)
    const amountOfBYN = useSelector((state:IGlobalState) => state.currency.amountOfBYN)
    const amountOfCurrency = useSelector((state:IGlobalState) => state.currency.amountOfCurrency)
    const dispatch = useDispatch()


  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency: CurrencyType) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === "byn") {
        if (value === "") {
            dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
            dispatch(ChangeCurrencyFieldAC(
            value,
            (+Number(value).toFixed(2) / currencyRate).toFixed(2)
          ));
        }
      } else {
        if (value === "") {
            dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
            dispatch(ChangeCurrencyFieldAC(
            (+Number(value).toFixed(2) * currencyRate).toFixed(2),
            value
          ));
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.action === "buy"
      ? dispatch(ChangeActionAC(true))
      : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency &&
    dispatch(СhangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

export default CurrencyEContainer
