import { apiKey, apiUrl } from "../../config";

interface Temperature {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface TemperatureRange {
  Minimum: Temperature;
  Maximum: Temperature;
}

interface WeatherCondition {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: TemperatureRange;
  Day: WeatherCondition;
  Night: WeatherCondition;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface Forecast {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

export const getForecasts = async (
  cityKey: string,
  days: 1 | 5 | 10 | 15
): Promise<Forecast> => {
  const response = await fetch(`${apiUrl}forecasts/v1/daily/${days}day/${cityKey}?apikey=${apiKey}`);
  return response.json();
}