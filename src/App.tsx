import React, { useState } from 'react'
import type { SelectChangeEvent } from '@mui/material'
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Paper,
  Chip,
} from '@mui/material'
import {
  WbSunny,
  Cloud,
  Grain,
  Air,
  Visibility,
  Thermostat,
  Water,
  LocationOn,
} from '@mui/icons-material'

interface WeatherData {
  city: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  visibility: number
  feelsLike: number
  description: string
  icon: React.ReactElement
}

const weatherData: Record<string, WeatherData> = {
  madrid: {
    city: 'Madrid',
    temperature: 22,
    condition: 'Soleado',
    humidity: 45,
    windSpeed: 12,
    visibility: 10,
    feelsLike: 24,
    description: 'Un día hermoso y soleado en la capital',
    icon: <WbSunny sx={{ fontSize: 80, color: '#FFA726' }} />,
  },
  barcelona: {
    city: 'Barcelona',
    temperature: 19,
    condition: 'Parcialmente nublado',
    humidity: 65,
    windSpeed: 15,
    visibility: 8,
    feelsLike: 21,
    description: 'Algunas nubes pero agradable junto al mar',
    icon: <Cloud sx={{ fontSize: 80, color: '#90A4AE' }} />,
  },
  sevilla: {
    city: 'Sevilla',
    temperature: 28,
    condition: 'Muy soleado',
    humidity: 35,
    windSpeed: 8,
    visibility: 12,
    feelsLike: 30,
    description: 'Día caluroso típico del sur de España',
    icon: <WbSunny sx={{ fontSize: 80, color: '#FF7043' }} />,
  },
  bilbao: {
    city: 'Bilbao',
    temperature: 16,
    condition: 'Llovizna',
    humidity: 85,
    windSpeed: 20,
    visibility: 5,
    feelsLike: 15,
    description: 'Clima típico del norte, con llovizna ligera',
    icon: <Grain sx={{ fontSize: 80, color: '#546E7A' }} />,
  },
  valencia: {
    city: 'Valencia',
    temperature: 24,
    condition: 'Soleado',
    humidity: 55,
    windSpeed: 10,
    visibility: 12,
    feelsLike: 26,
    description: 'Perfecto clima mediterráneo',
    icon: <WbSunny sx={{ fontSize: 80, color: '#FFB74D' }} />,
  },
}

function App() {
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [weather, setWeather] = useState<WeatherData | null>(null)

  const handleCityChange = (event: SelectChangeEvent) => {
    const cityKey = event.target.value as string
    setSelectedCity(cityKey)
    setWeather(weatherData[cityKey])
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
        }}
      >
        {/* Título principal */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textAlign: 'center',
            mb: 4,
          }}
        >
          🌤️ App del Clima
        </Typography>

        {/* Selector de ciudades */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 4,
            width: '100%',
            maxWidth: 400,
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="city-select-label">
              <LocationOn sx={{ mr: 1, verticalAlign: 'middle' }} />
              Selecciona una ciudad
            </InputLabel>
            <Select
              labelId="city-select-label"
              value={selectedCity}
              label="Selecciona una ciudad"
              onChange={handleCityChange}
              sx={{ fontSize: '1.1rem' }}
            >
              <MenuItem value="madrid">Madrid</MenuItem>
              <MenuItem value="barcelona">Barcelona</MenuItem>
              <MenuItem value="sevilla">Sevilla</MenuItem>
              <MenuItem value="bilbao">Bilbao</MenuItem>
              <MenuItem value="valencia">Valencia</MenuItem>
            </Select>
          </FormControl>
        </Paper>

        {/* Información del clima */}
        {weather && (
          <Card
            elevation={6}
            sx={{
              width: '100%',
              maxWidth: 600,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Encabezado con ciudad y temperatura */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Box>
                  <Typography variant="h4" component="h2" fontWeight="bold">
                    {weather.city}
                  </Typography>
                  <Typography variant="h2" component="div" fontWeight="300">
                    {weather.temperature}°C
                  </Typography>
                  <Chip
                    label={weather.condition}
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  {weather.icon}
                </Box>
              </Box>

              {/* Descripción */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontStyle: 'italic',
                  opacity: 0.9,
                }}
              >
                {weather.description}
              </Typography>

              {/* Detalles del clima */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'space-around',
                }}
              >
                <Box sx={{ textAlign: 'center', minWidth: '120px' }}>
                  <Thermostat sx={{ fontSize: 30, mb: 1 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Sensación
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {weather.feelsLike}°C
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', minWidth: '120px' }}>
                  <Water sx={{ fontSize: 30, mb: 1 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Humedad
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {weather.humidity}%
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', minWidth: '120px' }}>
                  <Air sx={{ fontSize: 30, mb: 1 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Viento
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {weather.windSpeed} km/h
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', minWidth: '120px' }}>
                  <Visibility sx={{ fontSize: 30, mb: 1 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Visibilidad
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {weather.visibility} km
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}

        {/* Mensaje cuando no hay ciudad seleccionada */}
        {!weather && (
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            👆 Selecciona una ciudad para ver el clima
          </Typography>
        )}
      </Box>
    </Container>
  )
}

export default App
