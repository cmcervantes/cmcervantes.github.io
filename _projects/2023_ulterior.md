---
title: "Ulterior"
excerpt: "This goal of this project was to investigate and develop approaches to thwart information extraction capabilities."
collection: projects
permalink: /projects/2023_ulterior
author_profile: true
year: 2023
role: "Principal Investigator"
jhuapl_approval_no: RR24-173
---

<p>{{ page.year }} &mdash; <i>{{ page.role }}</i></p>

This internally funded research project considered the problem of text communication between
a sender and receiver in an environment where information extraction (IE) capabilities are
deployed. The goal of the Ulterior project was to investigate and develop approaches to thwart
these capabilities, and in so doing identify a) specific methods for obscuring text content from
IE capabilities b) insights into general approaches for text obfuscation and c) potential
approaches for hardening IE capabilities against attacks like those identified in (a) and (b).

![Ulterior Workflow](/images/2023_ulterior_fig.png "Ulterior Workflow")
<i>Ulterior paradigm; the default (red) path shows a message that may be captured by an IE
capability and may or may not be received; the Ulterior (green) path shows a message that is
modified and thus thwarts the IE capability.<br/></i>

We investigated two scenarios for this project. In the first, we used a publicly available tool for
steganography, which transformed documents of one topic (e.g., world news) into another
(e.g., sports). Our experiments showed that while steganography is very effective for thwarting
IE capabilities (text is transformed, and thus information cannot be reliably extracted) the
approach is brittle: changes in whitespace or punctuation can corrupt decoding, and
steganography in general can be easily detected by off-the-shelf document classifiers.

In the second scenario, we experimented with simple text transformations that could thwart IE
without hindering human interpretability (e.g., random misspellings, swapping characters with
homoglyphs). One particularly effective method was to add nonsensical disjunctions (e.g.,
impossible times or places alongside the original alternatives). In our document classification,
relation extraction, and summarization experiments, these transformations were an effective
way to decrease IE performance (measured against transformer-based models like DistilBERT
and RoBERTa).

Of special note was the influence of nonsensical disjunctions on publicly available Large
Language Model (LLM) summarization. By adding entities that would have been trivial for a
human reader to disregard, we exploited the underlying absence of reasoning capabilities in the
LLM which meaningfully degraded the quality of the generated summaries. In one example, the
LLM asserted that one team won a championship when the article described their loss, and in
another the summary described a fictional character being elected president.
