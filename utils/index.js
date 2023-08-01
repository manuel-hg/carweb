export async function fetchCars(filters){
    const {manufacturer, year, model, limit, fuel} = filters;
    const headers = {
        "X-RapidAPI-Key" : "7d246c74c4msh130ed332684d313p10c5bdjsn71bece7fdf63",
        "X-RapidAPI-Host" : "cars-by-api-ninjas.p.rapidapi.com"
    }
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
          headers: headers,
        }
    );
    const result = await response.json();
    return result;
}