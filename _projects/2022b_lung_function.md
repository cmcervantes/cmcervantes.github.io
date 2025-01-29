---
title: "Characterizing Lung Function Change"
excerpt: "In this project, we investigated methods for characterizing changes in lung function in COPD patients."
collection: projects
permalink: /projects/2022b_lung_function
author_profile: true
year: 2022
role: "Co-Lead"
jhuapl_approval_no: RR24-173
---

<p>{{ page.year }} &mdash; <i>{{ page.role }}</i></p>

This project, funded by Johns Hopkins University Applied Physics Laboratory (JHU/APL) and
Johns Hopkins Medicine (JHM) had the primary goal of improved understanding of lung
function from electronic health record (EHR) data as a mechanism for informing care of 
Chronic Obstructive Pulmonary Disease (COPD) patients. While one of the early objectives of this work was to identify and model populations with a high likelihood of rapid lung function decline, analysis of the EHR data revealed that characterizing the change in lung function – that is, understanding when a patient was undergoing atypical change rather than noise in their pulmonary function tests (PFTs) – was itself a challenging task.

In clinical settings, it is common practice to consider a patient’s lung function by examining all spirometry measurements (FEV<sub>1</sub>); the rate of lung function change can be determined by subtracting the most recent PFT from their first and dividing by time. In our analysis, we compared this Total Change method with four others: Average Change (average of adjacent PFTs) and RANSAC, Quantile, and Huber Regression. We showed that commonly used and simple lung function change estimation methods (Total and Average Change) can be unstable in the presence of outliers. Huber Regression, by contrast, is an effective method for determining the rate of lung function change in EHR data, as it incorporates but is not beholden to outlier measurements and is consistent with expected clinical characteristics and outcomes.

<table>
<tr>
    <td><img src="/images/estimate_example_0_percyr.png"></td>
    <td><img src="/images/estimate_example_1_percyr.png"></td>
</tr>
<tr>
    <td><img src="/images/estimate_example_2_percyr.png"></td>
    <td><img src="/images/estimate_example_3_percyr.png"></td>
</tr>
</table>
<i>Example PFT timelines (black) shown plotted as FEV<sub>1</sub> value against an individual’s age;
estimated lung function trajectories are shown as deashed lines; rates of change are given as
percentage of initial FEV<sub>1</sub> value (negative values indicate lung function decline)<br/></i>

More information can be found in the <a href="https://bmjopenrespres.bmj.com/content/bmjresp/11/1/e001896.full.pdf">paper</a>.