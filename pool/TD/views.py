# -*- coding: utf8 -*-
from django.shortcuts import render_to_response

def get_to_tibet(ruquest):
    return render_to_response('get-to-tibet.html',{})

def hotel_index(request):
    return render_to_response('hotel-index.html',{})

def hotel_lhasa(request):
    return render_to_response('hotel-lhasa.html',{})

def train_to_tibet(request):
    return render_to_response('train-to-tibet.html',{})

def flight_to_tibet(request):
    return render_to_response('flight-to-tibet.html',{})

def hotel_form(request):
    return render_to_response('hotel-form.html',{})

def sitemap(request):
    return render_to_response('sitemap.html',{})

def aboutus(request):
    return render_to_response('aboutus.html',{})

def contactus(request):
    return render_to_response('contactus.html',{})

def whychooseus(request):
    return render_to_response('whychooseus.html',{})

def ourteam(request):
    return render_to_response('ourteam.html',{})

def salesteam(request):
    return render_to_response('salesteam.html',{})

def quick_form(request):
    return render_to_response('form-quick-question.html',{})

def whatwedo(request):
    return render_to_response('whatwedo.html',{})

def itinerary(request):
    return render_to_response('itinerary.html',{})
