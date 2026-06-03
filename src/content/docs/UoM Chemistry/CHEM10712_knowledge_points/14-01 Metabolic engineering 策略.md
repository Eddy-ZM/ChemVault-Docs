---
title: '14.1 Metabolic engineering 策略'
---

# 14.1 Metabolic engineering 策略

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[14 Microbial metabolic engineering 与 case studies|14. Microbial metabolic engineering 与 case studies]]
- 导航：上一节：[[13-05 CRISPR-Cas9|13.5 CRISPR-Cas9]]；下一节：[[14-02 C1 feedstocks 与 engineered E. coli|14.2 C1 feedstocks 与 engineered E. coli]]

## 详细内容

目标：把微生物变成生产 high-value products 的 cell factories。

常用策略：

- overexpress key metabolic enzymes。
- delete competing pathways。
- increase precursor supply。
- balance redox and energy cofactors。
- optimize pathway of interest。
- maintain cellular homeostasis and robust production phenotype。

Feedstocks：

- lignocellulosic biomass。
- C1 compounds，如 methanol、formate、CO2。
- organic waste。

Products：

- plant natural products。
- bioplastics。
- biofuels。
- pharmaceuticals。
- colourants。
- aromatics。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

metabolic engineering 是重排细胞反应网络，让 flux 流向目标产品。常见操作包括增加 pathway enzyme expression、删除 competing pathways、提高 precursor supply、平衡 NADH/NADPH/ATP、降低 product toxicity。

工程化必须考虑 cell homeostasis。把所有 flux 强推向产品可能会让细胞生长变差，导致总产量反而下降。因此常要在 growth、product yield、titre、rate 之间平衡。

## 原文小点逐条解释

- **原文小点：** overexpress key metabolic enzymes。
  - **讲解：** overexpress key enzymes 可提高 pathway capacity，把更多 substrate flux 拉入目标反应步骤。
- **原文小点：** delete competing pathways。
  - **讲解：** 删除竞争路径可减少 precursors 被旁路消耗，让更多 flux 进入目标产品路径。
- **原文小点：** increase precursor supply。
  - **讲解：** 提高 precursor supply 是为了避免目标 pathway 的上游原料成为 limiting factor。
- **原文小点：** balance redox and energy cofactors。
  - **讲解：** 许多 biosynthetic steps 需要 NADH/NADPH/ATP 等；cofactor 不平衡会让 pathway 即使有酶也跑不动。
- **原文小点：** optimize pathway of interest。
  - **讲解：** 优化 pathway 包括调表达量、酶比例、定位和调控，目标是提高 yield/titre/rate。
- **原文小点：** maintain cellular homeostasis and robust production phenotype。
  - **讲解：** 生产 phenotype 必须兼顾 host growth；细胞压力过高会降低总产量和稳定性。
- **原文小点：** lignocellulosic biomass。
  - **讲解：** 这些是便宜或可再生 feedstocks，工程菌若能利用它们，可降低成本并提高可持续性。
- **原文小点：** C1 compounds，如 methanol、formate、CO2。
  - **讲解：** 这些是便宜或可再生 feedstocks，工程菌若能利用它们，可降低成本并提高可持续性。
- **原文小点：** organic waste。
  - **讲解：** 这些是便宜或可再生 feedstocks，工程菌若能利用它们，可降低成本并提高可持续性。
- **原文小点：** plant natural products。
  - **讲解：** 这是 metabolic engineering 可生产的产品类型；共同点是把 microbial flux 重定向到有价值化学品。
- **原文小点：** bioplastics。
  - **讲解：** 这是 metabolic engineering 可生产的产品类型；共同点是把 microbial flux 重定向到有价值化学品。
- **原文小点：** biofuels。
  - **讲解：** 这是 metabolic engineering 可生产的产品类型；共同点是把 microbial flux 重定向到有价值化学品。
- **原文小点：** pharmaceuticals。
  - **讲解：** 这是 metabolic engineering 可生产的产品类型；共同点是把 microbial flux 重定向到有价值化学品。
- **原文小点：** colourants。
  - **讲解：** 这是 metabolic engineering 可生产的产品类型；共同点是把 microbial flux 重定向到有价值化学品。
- **原文小点：** aromatics。
  - **讲解：** 这是 metabolic engineering 可生产的产品类型；共同点是把 microbial flux 重定向到有价值化学品。

## 做题和复习时怎么用

问 metabolic engineering strategies 时用 flux 语言：overexpress desired pathway, knock out competing routes, improve precursor/cofactor supply, optimize regulation and tolerance.

## 常见误区

- 把工程化写成单一步骤，忽略 selection/screening、flux 和 host fitness。
- 混淆 ALE 的 whole-cell selection 与 directed evolution 的 protein-function screening。

## 关联知识点

- [[09-01 Metabolism 的核心理解|metabolism]]
- [[15-02 Adaptive Laboratory Evolution, ALE|ALE]]

<!-- END_DETAILED_EXPLANATION -->
