


// https://jsonmock.hackerrank.com/api/movies

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// HOC 

// reactivity of React
// hooks - useCallback, useMemo

function movieList() {	
	const [movies, setMovies] = useState([])

	useEffect(()=> {
		fetch('https://jsonmock.hackerrank.com/api/movies')
			.then(response => response.json())
			.then(res => setState(res.data))
		}
	}, [])

	return (
		<div>

		<ul>
		{movies.map(movie => (
			<li key={movie.imdbID}>
			<h2> {movie.title} </h2>
			<h3> {movie.year} </h3>
			</li>
		))}
		</ul>
	
		</div>
	)

}
