from os import listdir
from os.path import isfile, join

import cv2
import face_recognition


class PersonRecognition:

    def __init__(self, path_name):
        self.known_people_path = path_name
        self.list_of_known_images = [f for f in listdir(self.known_people_path) if isfile(join(self.known_people_path, f))]
        self.known_images = []
        self.get_known_image_encodings()

    def get_encodings_for_path_file_name(self, filename):
        img = face_recognition.load_image_file(filename)
        unknown_encodings = face_recognition.face_encodings(img)
        return unknown_encodings

    def get_known_image_encodings(self):
        for known_image_name in self.list_of_known_images:
            name_of_file = self.known_people_path + '/' + known_image_name
            encodings = self.get_encodings_for_path_file_name(name_of_file)
            for encoding in encodings:
                self.known_images.append(encoding)

    def get_actors_in_image(self, image):
        unknown_face_encodings = face_recognition.face_encodings(image)
        actors = []

        for encoding in unknown_face_encodings:
            results = face_recognition.compare_faces(self.known_images, encoding)

            for i in range(len(results)):
                if (results[i]):
                    actors.append(self.list_of_known_images[i].replace('.jpg', '').replace('_', ' ').title())
        return actors

    def get_actors_in_image_by_name(self, file_name):
        unknown_image = face_recognition.load_image_file(file_name)
        unknown_face_encodings = face_recognition.face_encodings(unknown_image)

        actors = []

        for encoding in unknown_face_encodings:
            results = face_recognition.compare_faces(self.known_images, encoding)

            count = 0
            for i in range(len(results)):
                if (results[i]):
                    actors.append(self.list_of_known_images[i].replace('.jpg', '').replace('_', ' ').title())
        return actors