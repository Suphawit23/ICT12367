from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1>ICT12367 SPU</h1>")

def about(request):
    return HttpResponse("<h1>เกี่ยวกับเรา</h1>")

def form(request):
    return render(request, 'form.html')

def contact(request):
    return HttpResponse("<h1>ติดต่อ ศุภวิชญ์ แซ่อิ๋ว 68046786</h1>")