import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import moment from 'moment'

import { TRANSLATIONS_PT } from './pt/translations'
import { TRANSLATIONS_EN } from './en/translations'
import { TRANSLATIONS_ES } from './es/translations'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                translation: TRANSLATIONS_PT
            },
            en: {
                translation: TRANSLATIONS_EN
            },
            es: {
                translation: TRANSLATIONS_ES
            }
        },
        fallbackLng: 'pt',

        interpolation: {
            format: function(value, format, lng) {
                // https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/
                if (value instanceof Date) return
                return moment(value).format(format)
            }
        },
        detection: {
            order: ['querystring', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng'
        }
    })

// Traduzir para idioma específico
// i18n.changeLanguage("en")