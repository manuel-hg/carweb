export async function fetchCars(filters){
    const {manufacturer, year, model, limit, fuel} = filters;
    const headers = {
        "X-RapidAPI-Key" : "7d246c74c4msh130ed332684d313p10c5bdjsn71bece7fdf63",
        "X-RapidAPI-Host" : "cars-by-api-ninjas.p.rapidapi.com"
    }
    //make=${manufacturer}
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=toyota&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
          headers: headers,
        }
    );
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}