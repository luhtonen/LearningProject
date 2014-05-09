(defproject zap "0.1.0-SNAPSHOT"
  :description "Zap issue tracker"
  :dependencies [[org.clojure/clojure "1.5.1"]
  [ring/ring-core "1.2.2"]
  [compojure "1.1.7"]]

:plugins [[lein-ring "0.8.10"]]

:ring {:handler zap.core/app})
