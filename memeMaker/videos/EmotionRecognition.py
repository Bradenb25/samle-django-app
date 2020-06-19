import pickle

import cv2
import face_recognition
import keras
import numpy as np
from deepface.extendedmodels import Emotion
from keras.engine.saving import load_model
from deepface import DeepFace

class EmotionRecognition():

    def __init__(self):
        self.models = {}

        self.models["emotion"] = Emotion.loadModel()
        # self.['angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral']
        self.emotion_dictionary = {
            '1000000': 'angry',
            '0100000': 'disgust',
            '0010000': 'fear',
            '0001000': 'happy',
            '0000100': 'sad',
            '0000010': 'surprise',
            '0000001': 'neutral'
        }
        # global graph
        # graph = tf.get_default_graph()

    def get_emotions_from_image(self, image):
        print('Trying to get image')
        # new_image = cv2.imread(r'happy1.jpg')
        print('Got Image')
        faces = self.get_faces(image)
        print('Got the different faces count', len(faces))
        emotions = []
        for face in faces:
            face = cv2.cvtColor(face[0], cv2.COLOR_BGR2GRAY)
            face = np.expand_dims(face, axis=2)
            face = np.expand_dims(face, axis=0)
            e = self.get_emotion(face)
            emotions.append(e)

        return list(set(emotions))

    def get_faces(self, image):
        face_locations = face_recognition.face_locations(image)
        faces = []
        for face_location in face_locations:
            top, right, bottom, left = face_location
            face_image = image[top:bottom, left:right]
            face_image = cv2.resize(face_image, (48, 48))
            # face_image = np.expand_dims(face_image, axis=2)
            faces.append(np.array([face_image]))

        return faces

    def get_emotion(self, face):
        # demography = DeepFace.analyze("./images/temp/happy/happy15.jpg", actions=['emotion'], enforce_detection=False, models=self.models)
        # image = [face]

        # image_pickle = open('image_pickle', 'ab')
        # pickle.dump(face, image_pickle)
        # image_pickle.close()

        # print(face)
        # print(face.shape)
        emotion = ''
        predictions = self.models['emotion'].predict(face)
        print('Prediction: ', predictions)
        for prediction in predictions:
            key = ''.join(str(int(e)) for e in prediction)
            if key in self.emotion_dictionary:
                emotion = self.emotion_dictionary[key]

        return emotion

# emotion_recognition = EmotionRecognition()
# dbfile = open('image_pickle', 'rb')
# face = pickle.load(dbfile)
# print(emotion_recognition.get_emotion(face))

