# MERYEM LACHGAR — Data & Analytics Engineer | BI • Gouvernance • Automatisation • Data Engineering

📍 Paris • ✉️ meryemlachgar2001@gmail.com • 📞 +33 7 64 02 76 64  
LinkedIn : *(colle ton lien ici)* • GitHub : *(colle ton lien ici)*

Je suis **analyste & ingénieure data**, passionnée par la valorisation de la donnée. Je conçois des solutions analytiques **fiables** pour améliorer la performance opérationnelle et accompagner les métiers dans leurs décisions.  
Spécialisée en **reporting avancé, automatisation et data engineering**, j’interviens sur toute la chaîne (KPI → qualité → pipelines → restitution) pour transformer les données en **leviers stratégiques**.

---

## Ce que j’apporte

✅ **Fiabilisation & Data Quality** : règles de gestion, contrôles, rapprochements, traçabilité, standardisation, documentation  
✅ **Industrialisation** : pipelines ETL/ELT, staging/datamarts, optimisation des traitements, logs & reprise sur incident  
✅ **Automatisation** : réduction du manuel, production de reporting robuste, process reproductibles  
✅ **BI orientée décision** : KPI, modèles sémantiques, dashboards lisibles, drill-down, storytelling

---

## Compétences

**BI / Reporting / Automatisation**  
- Power BI (certifiée) • QlikView • Qlik Sense • Tableau • Excel avancé  
- Power Query • DAX • VBA • Power Automate • VBS

**Data Engineering / Cloud**  
- Talend • Apache NiFi • Kafka • Spark / PySpark • Hadoop  
- GCP (BigQuery) • Azure (DataLake/Databricks) • Docker • GitLab CI/CD

**Langages & Bases de données**  
- SQL • PL/SQL • Python • R • SAS • Java  
- Oracle • PostgreSQL • SQL Server • BigQuery

**Gouvernance**  
- Modélisation de données • KPI & définitions • documentation • contrôle qualité • Collibra

---

## Expériences (résumé)

### Data Analyst (Alternance) — RATP Group | CSP Logistique (09/2023 → 10/2025)
- Construction de tableaux de bord **Power BI** (stocks, couverture, fournisseurs, performance)
- Mise en place d’un reporting complet (ponctualité, délais, conformité)
- Fiabilisation des données via **Power Query** et requêtes **SQL**
- Automatisation de process (VBA/Outlook), génération automatique de rapports mensuels
- Standardisation des KPI (définitions, règles de calcul, contrôles) + documentation

### Data Developer (Alternance) — Crédit Agricole Consumer Finance (04/2021 → 09/2022)
- Application **QlikView** de supervision des flux (suivi batch/datamart, alertes, écarts)
- Extraction & contrôles SQL, rapprochements pour fiabiliser les indicateurs de pilotage
- Automatisation du reporting et des contrôles (SAS EG / Excel VBA / scripts)
- Documentation, support utilisateurs, améliorations continues

---

## Projets (démos consultables)

> 👇 Les liens ci-dessous sont prévus pour un portfolio GitHub Pages.  
> Place chaque projet dans `projects/<nom-projet>/index.html` (voir section “Structure du repo”).

### 1) CACF — Contrôles automatisés & supervision (QlikView + SAS)
**Objectif :** fiabiliser les reportings en industrialisant les contrôles et la traçabilité.  
**Ce que j’ai fait :** contrôles de cohérence, suivi batch/datamart, gestion d’écarts, alertes, recette/MEP.  
**Stack :** QlikView • SAS (batch) • SQL • Datamart • Data Quality  
🔗 Démo : `projects/cacf-qlikview/`

---

### 2) RATP — Chaîne BI industrialisée (Talend ➜ Datamart ➜ Power BI)
**Objectif :** reporting logistique mensuel fiable et rapide à rafraîchir.  
**Ce que j’ai fait :** ingestion/staging, contrôles qualité, modèle étoile, KPI centralisés, restitution Power BI.  
**Stack :** Talend • Oracle SQL Developer • Power BI • Power Query  
🔗 Démo : `projects/ratp-stocks/`  
📎 Livrable (option) : `assets/ETL_avec_Talend_Open_Studio.pptx`

---

### 3) Détection de fraude carte bancaire — Machine Learning
**Objectif :** détecter la fraude sur un dataset très déséquilibré.  
**Ce que j’ai fait :** pipelines, sampling + SMOTE, GridSearchCV, calibration du seuil, métriques PR-AUC/F1/Recall.  
**Stack :** Python • pandas • scikit-learn • imblearn  
🔗 Démo : `projects/fraud-ml/`

---

### 4) Analyse COVID-19 — Pipeline R reproductible
**Objectif :** pipeline complet + rapport automatisable.  
**Ce que j’ai fait :** ingestion source publique, wrangling, visualisations, restitution R Markdown.  
**Stack :** R • ggplot2 • R Markdown  
🔗 Démo : `projects/covid-r/`

---

### 5) Dépenses de santé — Python OOP + SQLite + XML/XSL
**Objectif :** automatiser un traitement mensuel + indicateurs + restitution.  
**Ce que j’ai fait :** modèle objet, calcul d’indicateurs, visualisations, stockage SQLite, export XML/DTD + XSL.  
**Stack :** Python • SQLite • XML/XSL • matplotlib  
🔗 Démo : `projects/soins-sante/`

---

### 6) Mobilité internationale — Référentiel & procédures (Access)
**Objectif :** centraliser les dossiers + standardiser les procédures.  
**Ce que j’ai fait :** modélisation entités/relations, base Access, formulaires, requêtes, exports, documentation.  
**Stack :** Modélisation • Access • Documentation process  
🔗 Démo : `projects/mobilite/`

---

## Documents

- 📄 CV : `assets/CV_ML_2025.pdf`
- 🧩 Rapport L3 MIAGE : `assets/Rapport_L3MIAGE_MeryemLachgar_VF.pdf`
- 🧠 Rapport M1 MIAGE : `assets/RAPPORT_M1MIAGE_MERYEM_LACHGAR.pdf`
- 📌 Rapport d’activités : `assets/Rapport_d’activités_Meryem_LACHGAR.pdf`

---

## Structure recommandée du repo (pour GitHub Pages)

Crée un repo `portfolio` (ou `meryemlachgar.github.io`) et organise comme suit :

```txt
portfolio/
  README.md
  _config.yml
  assets/
    CV_ML_2025.pdf
    Rapport_L3MIAGE_MeryemLachgar_VF.pdf
    RAPPORT_M1MIAGE_MERYEM_LACHGAR.pdf
    Rapport_d’activités_Meryem_LACHGAR.pdf
    ETL_avec_Talend_Open_Studio.pptx
    img/
  projects/
    cacf-qlikview/
      index.html   (ex: cacf_qlikview.html renommé en index.html)
    ratp-stocks/
      index.html   (ex: ratp_stocks.html → index.html)
    fraud-ml/
      index.html   (ex: fraud.html → index.html)
    covid-r/
      index.html   (ex: covid.html → index.html)
    soins-sante/
      index.html   (ex: soins.html → index.html)
    mobilite/
      index.html   (ex: mobilite.html → index.html)
