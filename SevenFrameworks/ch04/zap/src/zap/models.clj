(ns zap.models
  (:refer-clojure :exclude [comment])
  (:use korma.db korma.core)
  (:require [clojure.string :as string]))

; Database
(defdb zap
  (sqlite3 {:db "zap.db"}))

; Entities
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

; Functions
(defn all-projects []
  (select project))

(defn create-project [proj]
  (insert project (values proj)))

(defn project-by-id [id]
  (first (select project (where {:id id}))))

(defn- issue-query []
  (-> (select* issue)
      (fields [:issue.id :id]
              :project_id
              :title
              :description
              [:status.id :status_id]
              [:status.name :status_name])
      (join status (= :issue.status :status.id))))

(defn issues-by-project [id]
  (-> (issue-query)
      (where {:issue.project_id id})
      exec))

(defn issue-by-id [id]
  (-> (issue-query)
      (where {:issue.id id})
      exec
      first))

(defn find-issues [q]
  (let [q (str "%" (string/lower-case q) "%")]
    (-> (issue-query)
        (where (or (like (sqlfn lower :issue.title) q)
                   (like (sqlfn lower :issue.description) q)))
        exec)))