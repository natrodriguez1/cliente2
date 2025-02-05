import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  cards:any[] =[
      {
        "titulo": "Desarrollo de IA para Detección Temprana de Cáncer",
        "descripcion": "Investigadores han creado una inteligencia artificial capaz de diferenciar células cancerosas de las normales, permitiendo diagnósticos más tempranos y precisos.",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnWhQaVLqlcDE4LYfmcTKsDPpWUG4xkTzuA&s",
        "mins": "9mins"
      },
      {
        "titulo": "Algoritmos de Visión Artificial para la Agricultura",
        "descripcion": "Científicos desarrollan algoritmos que, mediante imágenes aéreas y de móviles, estiman con alta precisión la producción y calibre de limones, mejorando las predicciones agrícolas.",
        "imagen": "https://www.seoenmexico.com/wp-content/uploads/2024/04/ia.jpg"
        ,"mins": "10mins"
      },
      {
        "titulo": "Tecnología Hiperespectral para Fiscalización Pesquera",
        "descripcion": "La Universidad de Concepción implementa un sistema basado en inteligencia artificial y visión hiperespectral para mejorar la fiscalización pesquera en Chile, logrando una precisión del 99% en la identificación de especies.",
        "imagen": "https://www.tarlogic.com/wp-content/uploads/2023/09/riesgos-seguridad-IA-3-1200x675.jpg"
        ,"mins": "19mins"
      },
      {
        "titulo": "Procesamiento Digital de Imágenes para Segmentación de Objetos",
        "descripcion": "Investigación sobre el uso de técnicas de procesamiento digital de imágenes para la segmentación de objetos basados en intensidad y movimiento, aplicable en sistemas de visión artificial.",
        "imagen": "https://profuturo.education/wp-content/uploads/2024/06/240607-obsimg-web-1.jpg"
        ,"mins": "20mins"
      },
      {
        "titulo": "Descripción Automática de Secciones Delgadas de Rocas",
        "descripcion": "Desarrollo de una aplicación web que utiliza inteligencia artificial para generar descripciones textuales y verbales a partir de imágenes de secciones delgadas de rocas, facilitando el trabajo en geología.",
        "imagen": "https://img.computing.es/wp-content/uploads/2024/03/22155324/IA-2.jpg"
        ,"mins": "18mins"
      },
      {
        "titulo": "Integración de Técnicas de Visión Computacional para Monitoreo de Flujos Piroclásticos",
        "descripcion": "Propuesta de un sistema embebido que combina visión computacional y tecnologías de comunicación para monitorear en tiempo real flujos piroclásticos durante erupciones volcánicas.",
        "imagen": "https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2023/01/01/media-docena-de-curiosidades-sobre-la-inteligencia-artificial-ia.jpeg"
        ,"mins": "25mins"
      },
      {
        "titulo": "Solución al Misterio del Vuelo MH370 mediante IA y Tecnología Cuántica",
        "descripcion": "Avances en inteligencia artificial y computación cuántica están renovando los esfuerzos para localizar el vuelo MH370, desaparecido en 2014, analizando patrones en datos satelitales y corrientes oceánicas.",
        "imagen": "https://megaprofe.es/wp-content/uploads/2024/01/Podium-de-Las-5-mejores-herramientas-con-IA-para-usar-en-el-aula-2024-.jpg"
        ,"mins": "30mins"
      },
      {
        "titulo": "Innovaciones Tecnológicas Recientes",
        "descripcion": "Exploración de las últimas investigaciones tecnológicas que están revolucionando el mundo, desde avances en inteligencia artificial hasta nuevas aplicaciones en biotecnología.",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28ffmdl5EM4_CsdpZKkz9O-qEVbDhzjS6lQ&s"
        ,"mins": "51mins"
      },
      {
        "titulo": "Liderazgo en Investigación en Ciencia, Tecnología e Innovación",
        "descripcion": "La Universidad Católica San Pablo destaca en el sur por sus proyectos de investigación en ciencia, tecnología e innovación, contribuyendo al desarrollo regional.",
        "imagen": "https://blog.desafiolatam.com/wp-content/uploads/2023/06/nace-nueva-google-anuncia-lluvia-herramientas-ia-integrada-individuos-desarrolladores-empresas-2983110-1024x666.webp"
        ,"mins": "45mins"
      }  
  ]
}
