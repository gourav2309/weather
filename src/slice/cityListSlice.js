import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash";

const initialState = [
    {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1686668400,
                "main": {
                    "temp": 306.21,
                    "feels_like": 307.03,
                    "temp_min": 304.95,
                    "temp_max": 306.21,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 943,
                    "humidity": 40,
                    "temp_kf": 1.26
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 28
                },
                "wind": {
                    "speed": 8.21,
                    "deg": 275,
                    "gust": 11.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-13 15:00:00"
            },
            {
                "dt": 1686679200,
                "main": {
                    "temp": 305.44,
                    "feels_like": 306.65,
                    "temp_min": 303.91,
                    "temp_max": 305.44,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 944,
                    "humidity": 44,
                    "temp_kf": 1.53
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 31
                },
                "wind": {
                    "speed": 8.63,
                    "deg": 275,
                    "gust": 11.75
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-13 18:00:00"
            },
            {
                "dt": 1686690000,
                "main": {
                    "temp": 302.98,
                    "feels_like": 304.59,
                    "temp_min": 301.37,
                    "temp_max": 302.98,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 943,
                    "humidity": 54,
                    "temp_kf": 1.61
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 16
                },
                "wind": {
                    "speed": 6.11,
                    "deg": 273,
                    "gust": 11.31
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-13 21:00:00"
            },
            {
                "dt": 1686700800,
                "main": {
                    "temp": 300.02,
                    "feels_like": 301.42,
                    "temp_min": 300.02,
                    "temp_max": 300.02,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 944,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 4.96,
                    "deg": 273,
                    "gust": 9.46
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 00:00:00"
            },
            {
                "dt": 1686711600,
                "main": {
                    "temp": 303.13,
                    "feels_like": 304.33,
                    "temp_min": 303.13,
                    "temp_max": 303.13,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 946,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 4.17,
                    "deg": 252,
                    "gust": 5.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 03:00:00"
            },
            {
                "dt": 1686722400,
                "main": {
                    "temp": 308.49,
                    "feels_like": 309.02,
                    "temp_min": 308.49,
                    "temp_max": 308.49,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 946,
                    "humidity": 33,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 5.28,
                    "deg": 246,
                    "gust": 6.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 06:00:00"
            },
            {
                "dt": 1686733200,
                "main": {
                    "temp": 311.22,
                    "feels_like": 311.16,
                    "temp_min": 311.22,
                    "temp_max": 311.22,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 944,
                    "humidity": 25,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 6.23,
                    "deg": 245,
                    "gust": 7.33
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 09:00:00"
            },
            {
                "dt": 1686744000,
                "main": {
                    "temp": 311.11,
                    "feels_like": 310.46,
                    "temp_min": 311.11,
                    "temp_max": 311.11,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 942,
                    "humidity": 23,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 6.69,
                    "deg": 239,
                    "gust": 8.08
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 12:00:00"
            },
            {
                "dt": 1686754800,
                "main": {
                    "temp": 307.11,
                    "feels_like": 307.14,
                    "temp_min": 307.11,
                    "temp_max": 307.11,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 944,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 7.67,
                    "deg": 263,
                    "gust": 10.32
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 15:00:00"
            },
            {
                "dt": 1686765600,
                "main": {
                    "temp": 303.61,
                    "feels_like": 304.73,
                    "temp_min": 303.61,
                    "temp_max": 303.61,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 945,
                    "humidity": 49,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 57
                },
                "wind": {
                    "speed": 7.01,
                    "deg": 266,
                    "gust": 10.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 18:00:00"
            },
            {
                "dt": 1686776400,
                "main": {
                    "temp": 300.88,
                    "feels_like": 302.41,
                    "temp_min": 300.88,
                    "temp_max": 300.88,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 944,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 5.75,
                    "deg": 270,
                    "gust": 9.29
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 21:00:00"
            },
            {
                "dt": 1686787200,
                "main": {
                    "temp": 299.72,
                    "feels_like": 299.72,
                    "temp_min": 299.72,
                    "temp_max": 299.72,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 944,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 26
                },
                "wind": {
                    "speed": 3.41,
                    "deg": 266,
                    "gust": 6.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-15 00:00:00"
            },
            {
                "dt": 1686798000,
                "main": {
                    "temp": 302.94,
                    "feels_like": 304.2,
                    "temp_min": 302.94,
                    "temp_max": 302.94,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 946,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 17
                },
                "wind": {
                    "speed": 3.76,
                    "deg": 247,
                    "gust": 5.35
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 03:00:00"
            },
            {
                "dt": 1686808800,
                "main": {
                    "temp": 308.59,
                    "feels_like": 308.94,
                    "temp_min": 308.59,
                    "temp_max": 308.59,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 946,
                    "humidity": 32,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 6.66,
                    "deg": 234,
                    "gust": 7.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 06:00:00"
            },
            {
                "dt": 1686819600,
                "main": {
                    "temp": 311.22,
                    "feels_like": 310.88,
                    "temp_min": 311.22,
                    "temp_max": 311.22,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 944,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 7.9,
                    "deg": 240,
                    "gust": 9.47
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 09:00:00"
            },
            {
                "dt": 1686830400,
                "main": {
                    "temp": 311.05,
                    "feels_like": 310.38,
                    "temp_min": 311.05,
                    "temp_max": 311.05,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 943,
                    "humidity": 23,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 8.38,
                    "deg": 243,
                    "gust": 9.71
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 12:00:00"
            },
            {
                "dt": 1686841200,
                "main": {
                    "temp": 306.72,
                    "feels_like": 307.39,
                    "temp_min": 306.72,
                    "temp_max": 306.72,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 944,
                    "humidity": 38,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 62
                },
                "wind": {
                    "speed": 7.55,
                    "deg": 268,
                    "gust": 10.95
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-15 15:00:00"
            },
            {
                "dt": 1686852000,
                "main": {
                    "temp": 302.69,
                    "feels_like": 304.45,
                    "temp_min": 302.69,
                    "temp_max": 302.69,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 944,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 47
                },
                "wind": {
                    "speed": 6.9,
                    "deg": 256,
                    "gust": 11.43
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-15 18:00:00"
            },
            {
                "dt": 1686862800,
                "main": {
                    "temp": 300.61,
                    "feels_like": 302.11,
                    "temp_min": 300.61,
                    "temp_max": 300.61,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 943,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 53
                },
                "wind": {
                    "speed": 7.57,
                    "deg": 246,
                    "gust": 12.62
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-15 21:00:00"
            },
            {
                "dt": 1686873600,
                "main": {
                    "temp": 299.38,
                    "feels_like": 299.38,
                    "temp_min": 299.38,
                    "temp_max": 299.38,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 944,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 47
                },
                "wind": {
                    "speed": 6.36,
                    "deg": 243,
                    "gust": 11.62
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-16 00:00:00"
            },
            {
                "dt": 1686884400,
                "main": {
                    "temp": 302.45,
                    "feels_like": 304.06,
                    "temp_min": 302.45,
                    "temp_max": 302.45,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 946,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 13
                },
                "wind": {
                    "speed": 7.8,
                    "deg": 232,
                    "gust": 10.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-16 03:00:00"
            },
            {
                "dt": 1686895200,
                "main": {
                    "temp": 306.13,
                    "feels_like": 307.57,
                    "temp_min": 306.13,
                    "temp_max": 306.13,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 946,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 27
                },
                "wind": {
                    "speed": 9.15,
                    "deg": 230,
                    "gust": 11.55
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-16 06:00:00"
            },
            {
                "dt": 1686906000,
                "main": {
                    "temp": 310.93,
                    "feels_like": 311.58,
                    "temp_min": 310.93,
                    "temp_max": 310.93,
                    "pressure": 1002,
                    "sea_level": 1002,
                    "grnd_level": 943,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 8.51,
                    "deg": 233,
                    "gust": 11.19
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-16 09:00:00"
            },
            {
                "dt": 1686916800,
                "main": {
                    "temp": 309.51,
                    "feels_like": 309.62,
                    "temp_min": 309.51,
                    "temp_max": 309.51,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 942,
                    "humidity": 29,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 10.01,
                    "deg": 245,
                    "gust": 10.84
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-16 12:00:00"
            },
            {
                "dt": 1686927600,
                "main": {
                    "temp": 305.41,
                    "feels_like": 306,
                    "temp_min": 305.41,
                    "temp_max": 305.41,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 943,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.65,
                    "deg": 250,
                    "gust": 11.08
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-16 15:00:00"
            },
            {
                "dt": 1686938400,
                "main": {
                    "temp": 301.7,
                    "feels_like": 303.44,
                    "temp_min": 301.7,
                    "temp_max": 301.7,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 944,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.68,
                    "deg": 242,
                    "gust": 12.02
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-16 18:00:00"
            },
            {
                "dt": 1686949200,
                "main": {
                    "temp": 299.75,
                    "feels_like": 299.75,
                    "temp_min": 299.75,
                    "temp_max": 299.75,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 942,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 6.72,
                    "deg": 229,
                    "gust": 12.28
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-16 21:00:00"
            },
            {
                "dt": 1686960000,
                "main": {
                    "temp": 299.01,
                    "feels_like": 299.56,
                    "temp_min": 299.01,
                    "temp_max": 299.01,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 943,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 5.42,
                    "deg": 232,
                    "gust": 11.26
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-17 00:00:00"
            },
            {
                "dt": 1686970800,
                "main": {
                    "temp": 302.8,
                    "feels_like": 304.14,
                    "temp_min": 302.8,
                    "temp_max": 302.8,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 944,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 7.69,
                    "deg": 227,
                    "gust": 10.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-17 03:00:00"
            },
            {
                "dt": 1686981600,
                "main": {
                    "temp": 308.53,
                    "feels_like": 308.84,
                    "temp_min": 308.53,
                    "temp_max": 308.53,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 945,
                    "humidity": 32,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 14
                },
                "wind": {
                    "speed": 9.07,
                    "deg": 234,
                    "gust": 11.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-17 06:00:00"
            },
            {
                "dt": 1686992400,
                "main": {
                    "temp": 311.31,
                    "feels_like": 311.3,
                    "temp_min": 311.31,
                    "temp_max": 311.31,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 942,
                    "humidity": 25,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 9.97,
                    "deg": 247,
                    "gust": 12.02
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-17 09:00:00"
            },
            {
                "dt": 1687003200,
                "main": {
                    "temp": 309.45,
                    "feels_like": 309.28,
                    "temp_min": 309.45,
                    "temp_max": 309.45,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 942,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 35
                },
                "wind": {
                    "speed": 11.4,
                    "deg": 255,
                    "gust": 13.05
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-17 12:00:00"
            },
            {
                "dt": 1687014000,
                "main": {
                    "temp": 304.78,
                    "feels_like": 305.61,
                    "temp_min": 304.78,
                    "temp_max": 304.78,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 943,
                    "humidity": 44,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 73
                },
                "wind": {
                    "speed": 8.85,
                    "deg": 247,
                    "gust": 11.31
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-17 15:00:00"
            },
            {
                "dt": 1687024800,
                "main": {
                    "temp": 302.23,
                    "feels_like": 304.01,
                    "temp_min": 302.23,
                    "temp_max": 302.23,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 943,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 87
                },
                "wind": {
                    "speed": 7.86,
                    "deg": 242,
                    "gust": 12.55
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-17 18:00:00"
            },
            {
                "dt": 1687035600,
                "main": {
                    "temp": 300.1,
                    "feels_like": 301.68,
                    "temp_min": 300.1,
                    "temp_max": 300.1,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 943,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.2,
                    "deg": 249,
                    "gust": 13.34
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-17 21:00:00"
            },
            {
                "dt": 1687046400,
                "main": {
                    "temp": 298.97,
                    "feels_like": 299.51,
                    "temp_min": 298.97,
                    "temp_max": 298.97,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 943,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.01,
                    "deg": 244,
                    "gust": 14.01
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-18 00:00:00"
            },
            {
                "dt": 1687057200,
                "main": {
                    "temp": 300.77,
                    "feels_like": 302.45,
                    "temp_min": 300.77,
                    "temp_max": 300.77,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 945,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.98,
                    "deg": 254,
                    "gust": 13.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-18 03:00:00"
            },
            {
                "dt": 1687068000,
                "main": {
                    "temp": 305.72,
                    "feels_like": 306.68,
                    "temp_min": 305.72,
                    "temp_max": 305.72,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 945,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 10.26,
                    "deg": 262,
                    "gust": 12.95
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-18 06:00:00"
            },
            {
                "dt": 1687078800,
                "main": {
                    "temp": 309.92,
                    "feels_like": 309.99,
                    "temp_min": 309.92,
                    "temp_max": 309.92,
                    "pressure": 1002,
                    "sea_level": 1002,
                    "grnd_level": 943,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 84
                },
                "wind": {
                    "speed": 10.11,
                    "deg": 257,
                    "gust": 12.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-18 09:00:00"
            },
            {
                "dt": 1687089600,
                "main": {
                    "temp": 309.01,
                    "feels_like": 308.86,
                    "temp_min": 309.01,
                    "temp_max": 309.01,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 941,
                    "humidity": 29,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 9.44,
                    "deg": 259,
                    "gust": 11.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-18 12:00:00"
            }
        ],
        "city": {
            "id": 1269743,
            "name": "Indore",
            "coord": {
                "lat": 22.7204,
                "lon": 75.8682
            },
            "country": "IN",
            "population": 1837041,
            "timezone": 19800,
            "sunrise": 1686615074,
            "sunset": 1686663711
        },
        isFavorite:true
    },
];

const cityList = createSlice({
    name: 'cityList',
    initialState,
    reducers:{
        addCity: (state, action) => {
            state.unshift(action.payload);
        },
        updateCity: (state, action) => {
            const {index, isFavorite } = action.payload;
            state[index].isFavorite = isFavorite;
        },
        removeCity: (state, action) => {
            state.splice(action.payload,1);
        },
    },
})

export default cityList.reducer;
export const {addCity, removeCity, updateCity} = cityList.actions;