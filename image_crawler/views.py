from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.core.mail import EmailMessage
from django.http import HttpResponse
from icrawler.builtin import GoogleImageCrawler
import requests
import io
import os
import shutil
import zipfile
import requests
import io
from django.core.mail import EmailMessage
from django.http import HttpResponse
from icrawler.builtin import GoogleImageCrawler
from django.conf import settings


def create_directory(folder_name):
    folder_path = os.path.join(settings.MEDIA_ROOT, folder_name)
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    return folder_path


def zip_folder(folder_path):
    zip_filename = f"{folder_path}.zip"
    with zipfile.ZipFile(zip_filename, 'w') as zipf:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                zipf.write(file_path, os.path.relpath(file_path, folder_path))
    return zip_filename

def image_download(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        keyword = request.POST.get('keyword')
        number = int(request.POST.get('number'))
        folder_name = f"{keyword}_images"
        folder_path = create_directory(folder_name)
        google_Crawler = GoogleImageCrawler(storage={'root_dir': folder_path})
        google_Crawler.crawl(keyword=keyword, max_num=number)
        zip_file_path = zip_folder(folder_path)
        email_subject = f"Your Downloaded Images for '{keyword}'"
        email_body = f"Please find attached a zip file containing the {number} images you requested for the keyword '{keyword}'."
        email_message = EmailMessage(subject=email_subject, body=email_body, to=[email])
        with open(zip_file_path, 'rb') as zipf:
            email_message.attach(f"{folder_name}.zip", zipf.read(), 'application/zip')
        email_message.send()
        os.remove(zip_file_path)
        shutil.rmtree(folder_path)
        return HttpResponse(f"Images for '{keyword}' have been sent to {email}.")
    else:
        return render(request, 'download_images.html')
