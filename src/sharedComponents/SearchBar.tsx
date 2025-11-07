import { useState, useEffect, type KeyboardEvent } from "react";

interface Props {
    placeHolder: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeHolder, onQuery }: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query);
        }, 2000)

        return () => {
            clearTimeout(timeOutId);
        }
    }, [query, onQuery])

    const handleSearch = () => {
        onQuery(query);    
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (    
        <div className="row justify-content-center mb-4">
            <div className="col-md-8">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder={placeHolder} 
                        value={query}
                        onChange={(event) => setQuery(event.target.value)} 
                        onKeyDown={handleKeyDown}
                    />
                    <button 
                        onClick={handleSearch} 
                        className="btn btn-primary btn-lg"
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    )
}