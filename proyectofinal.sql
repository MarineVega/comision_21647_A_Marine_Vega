-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-09-2023 a las 22:08:00
-- Versión del servidor: 8.0.34
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectofinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `ID` int NOT NULL,
  `sTitulo` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `sPost` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `sLink` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `dCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`ID`, `sTitulo`, `sPost`, `sLink`, `dCreacion`) VALUES
(1, 'Posteo 1', 'Prueba Alta de posteo', 'https://cdn.pixabay.com/photo/2023/04/06/07/13/colorful-flower-7903074_1280.png', '2023-09-13 20:44:13'),
(2, 'Posteo 2', 'Prueba de inserción posteo 2', 'https://png.pngtree.com/png-clipart/20191121/ourmid/pngtree-cute-watercolor-flowers-bouquet-transparent-background-for-wedding-or-greeting-card-png-image_2012391.jpg', '2023-09-13 20:45:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
