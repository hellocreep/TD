# -*- coding: utf8 -*-
from django.shortcuts import render_to_response

def get_to_tibet(ruquest):
    return render_to_response('get-to-tibet.html', {})

def hotel_index(request):
    return render_to_response('hotel-index.html', {})

def hotel_lhasa(request):
    return render_to_response('hotel-lhasa.html', {})

def train_to_tibet(request):
    return render_to_response('train-to-tibet.html', {})

def flight_to_tibet(request):
    return render_to_response('flight-to-tibet.html', {})

def hotel_form(request):
    return render_to_response('hotel-form.html', {})

def sitemap(request):
    return render_to_response('sitemap.html', {})

def aboutus(request):
    return render_to_response('aboutus.html', {})

def contactus(request):
    return render_to_response('contactus.html', {})

def whychooseus(request):
    return render_to_response('whychooseus.html', {})

def ourteam(request):
    return render_to_response('ourteam.html', {})

def salesteam(request):
    return render_to_response('salesteam.html', {})

def quick_form(request):
    return render_to_response('form-quick-question.html', {})

def whatwedo(request):
    return render_to_response('whatwedo.html', {})

def tourguide(request):
    return render_to_response('tourguide.html', {})

def travelsytle(request):
    return render_to_response('travelsytle.html', {})

def responsible(request):
    return render_to_response('responsible.html', {})

def ourcompany(request):
    return render_to_response('ourcompany.html', {})

def overview(request):
    return render_to_response('overview.html', {})

def whentogo(request):
    return render_to_response('whentogo.html', {})

def thingstodo(request):
    return render_to_response('thingstodo.html', {})

def maps(request):
    return render_to_response('maps.html', {})

def whattosee(request):
    return render_to_response('whattosee.html', {})

def itinerary(request):
    return render_to_response('itinerary.html', {})

def share(request):
    return render_to_response('share-form.html', {})

def form(request):
    return render_to_response('shareform.html', {})

def travel_resource(request):

    return render_to_response('travel-resource.html',{})

def group_tour(request):
    return render_to_response('Group-tour.html',{})

    return render_to_response('travel-resource.html', {})

def themetour_train(request):
    return render_to_response('themetour-train.html', {})
