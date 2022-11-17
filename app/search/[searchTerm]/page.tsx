type SearchResult = {
	organic_results: [
		{
			position: number;
			title: string;
			link: string;
			thumbnail: string;
			snippet: string;
		}
	];
};

const search = async (searchTerm: string) => {
	const res = await fetch(
		`https://serpapi.com/search.json?engine=google&q=${searchTerm}&api_key=${process.env.API_KEY}`
	);
	const result: SearchResult = await res.json();
	return result;
};

const SearchResults = async ({
	params: { searchTerm },
}: {
	params: { searchTerm: string };
}) => {
	const searchResults = await search(searchTerm);

	return (
		<div>
			<p className="text-gray-500 text-sm">
				You searched for: {searchTerm}
			</p>
			<ol className="flex flex-col space-y-5 p-5">
				{searchResults.organic_results.map(result => (
					<li key={result.position} className="list-decimal">
						<p className="font-bold">{result.title}</p>
						<p>{result.snippet}</p>
					</li>
				))}
			</ol>
		</div>
	);
};
export default SearchResults;
