(ns zap.core
  (:use compojure.core))

(defroutes app
           (GET "/" []
                "Hello, World!"))