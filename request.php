<?php
$data = '<?xml version="1.0" encoding="UTF-8"?>
<entries>
    <definition name="Definition" author="Michael">
    A statement of the exact meaning of a word, especially in a
    dictionary.
    </definition>
    <definition name="Bar" author="Joan">
    A place that sells alcholic beverages.
    </definition>
    <definition name="AJAX" author="Roxan">
    Technique which involves the use of javascript and xml.
    </definition>
    <definition name="HTML" author="felix">
    The standard markup language for creating web pages and web applications.
    </definition>
    <definition name="CSS" author="Hernandez">
    A style sheet language used for describing the presentation of a document written in a markup language.
    </definition>
    <definition name="JavaScript" author="Harley">
    A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
    </definition>
    <definition name="PHP" author="Steve">
    A server-side scripting language, and a powerful tool for making dynamic and interactive websites.
    </definition>
</entries>';

header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($data);
//echo $xmlOutput->asXML();
print($xmlOutput -> asXML());