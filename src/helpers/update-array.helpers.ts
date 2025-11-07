export function updateArray(prevSearches: string[], item: string): string[] {    
    if (prevSearches[0] === item) return prevSearches;

    const filteredArray = prevSearches.filter((termino) => {
        return termino.toLocaleLowerCase() !== item.toLocaleLowerCase();
    });
    const updatedArray = [item, ...filteredArray].slice(0, 7);

    return updatedArray;
}