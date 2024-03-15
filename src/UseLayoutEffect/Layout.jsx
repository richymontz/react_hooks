import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../examples/";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { quote, author } = !!data && data[0];

  const nextQuote = () => {
    increment(1);
  }

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />


      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}


      <button className="btn btn-primary" disabled={isLoading} onClick={nextQuote}> Next Quote</button>
    </>
  )
}
