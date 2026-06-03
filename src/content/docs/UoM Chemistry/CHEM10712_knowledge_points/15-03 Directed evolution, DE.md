# 15.3 Directed evolution, DE

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[15 Molecular evolution、ALE 与 directed evolution|15. Molecular evolution、ALE 与 directed evolution]]
- 导航：上一节：[[15-02 Adaptive Laboratory Evolution, ALE|15.2 Adaptive Laboratory Evolution, ALE]]；下一节：[[15-04 Directed evolution case sitagliptin transaminase|15.4 Directed evolution case: sitagliptin transaminase]]

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

