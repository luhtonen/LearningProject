(defproject zap "0.1.0-SNAPSHOT"
  :description "Zap issue tracker"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/data.json "0.2.1"]

                 [ring "1.2.2"]
                 [ring/ring-core "1.2.2"]
                 [ring/ring-devel "1.2.2"]
                 [compojure "1.1.7"]

                 [korma "0.3.0-RC5"]
                 [org.xerial/sqlite-jdbc "3.7.2"]

                 [hiccup "1.0.5"]
                 [enlive "1.1.5"]
                 [valip "0.2.0"]
                 [kerodon "0.3.0"]]

:plugins [[lein-ring "0.8.10"]]

:ring {:handler zap.core/app})
