---
title: '15.3 Directed evolution, DE'
---
- 返回总讲义：[CHEM10712 slides 知识点整理与讲解](/uom-chemistry/chem10712/chem10712_slides_knowledge_notes_zh/)
- 知识点索引：[CHEM10712 知识点索引](/uom-chemistry/chem10712_knowledge_points/00-chem10712-知识点索引/)
- 上级章节：[15. Molecular evolution、ALE 与 directed evolution](/uom-chemistry/chem10712_knowledge_points/15-molecular-evolutionale-与-directed-evolution/)
- 导航：上一节：[15.2 Adaptive Laboratory Evolution, ALE](/uom-chemistry/chem10712_knowledge_points/15-02-adaptive-laboratory-evolution-ale/)；下一节：[15.4 Directed evolution case: sitagliptin transaminase](/uom-chemistry/chem10712_knowledge_points/15-04-directed-evolution-case-sitagliptin-transaminase/)

## 详细内容

DE 更直接针对 protein function。

基本循环：

1. library generation：mutagenesis/recombination 产生 gene variants。
2. expression：gene library 变成 protein/product library。
3. screening/selection：找有目标功能的 variants。
4. genotype-phenotype linkage：确保能从功能回到对应 gene。
5. repeat：多轮迭代 climbing fitness landscape。

Fitness landscape：

- 有 local maxima 和 global maxima。
- 小范围 mutagenesis 可能困在 local maximum。
- 需要足够 diversity 或 recombination 才能跨过 fitness valleys。

Screening methods：

- colonies on solid media。
- wells in liquid culture。
- fluorescence/colorimetric reporters。
- chromatography, mass spectrometry, NMR。
- FACS 可按 fluorescence 分选 individual cells。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

directed evolution 针对 gene/protein function 做人工 Darwinian cycle。library generation 提供 variation；screening/selection 提供 selection；保留 hit 并再次 mutagenesis 提供 iteration。

关键技术难点是 genotype-phenotype linkage。如果你筛到一个高活性蛋白，却无法知道对应 DNA sequence，就不能进入下一轮。phage display、cell display、microplate screening 等方法都在维护这个 linkage。

## 原文小点逐条解释

- **原文小点：** 有 local maxima 和 global maxima。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。
- **原文小点：** 小范围 mutagenesis 可能困在 local maximum。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。
- **原文小点：** 需要足够 diversity 或 recombination 才能跨过 fitness valleys。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。
- **原文小点：** colonies on solid media。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。
- **原文小点：** wells in liquid culture。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。
- **原文小点：** fluorescence/colorimetric reporters。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。
- **原文小点：** chromatography, mass spectrometry, NMR。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。
- **原文小点：** FACS 可按 fluorescence 分选 individual cells。
  - **讲解：** 这个小点属于 directed evolution cycle；要联系 library generation、genotype-phenotype linkage、screen/selection 和 iterative improvement。

## 做题和复习时怎么用

比较 ALE 和 DE：ALE selects organism fitness in environment; DE mutates genes/proteins and screens/selects desired molecular function.

## 常见误区

- 把工程化写成单一步骤，忽略 selection/screening、flux 和 host fitness。
- 混淆 ALE 的 whole-cell selection 与 directed evolution 的 protein-function screening。

## 关联知识点

- [variation-selection-replication](/uom-chemistry/chem10712_knowledge_points/01-02-生命需要什么/)
- [enzyme function](/uom-chemistry/chem10712_knowledge_points/08-08-enzyme-catalysis-的本质/)

<!-- END_DETAILED_EXPLANATION -->
