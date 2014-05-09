(ns zap.models
  (:refer-clojure :exclude [comment])
  (:use korma.db korma.core)
  (:require [clojure.string :as string]))

(defdb zap
  (sqlite3 {:db "zap.db"}))

(defentity project
  (entity-fields :id :name))

(declare comment)
(defentity issue
  (entity-fields :id :project_id :title :description :status)
  (has-many comment))

(defentity status
  (entity-fields :id :name))

(defentity tag
  (entity-fields :id :issue_id :tag))

(defentity comment
  (entity-fields :id :issue_id :content)
  (belongs-to issue))