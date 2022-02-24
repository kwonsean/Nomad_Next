import { useEffect, useState } from "react";
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MovieDetail({ params }) {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState([]);
  const [title, id] = params;
  useEffect(() => {
    (async () => {
      const results = await (await fetch(`/api/movies/${id}`)).json();
      setData(results);
      console.log(results);
      setGenres(results.genres.map((item) => item.name));
    })();
  }, []);

  return (
    <>
      <h2>
        {title} ({data?.release_date?.slice(0, 4)})
      </h2>
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
      <div className="genreBox">
        {genres.map((genre, i) => {
          return (
            <div key={i} className="genre">
              {genre}
            </div>
          );
        })}
        <div>
          <b>평점: {data.vote_average}</b>
        </div>
      </div>
      <section className="overView">{data.overview}</section>
      <style jsx>{`
        .genreBox {
          display: flex;
          padding: 10px 0;
        }
        .genre {
          margin-right: 10px;
        }
        .overView {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
