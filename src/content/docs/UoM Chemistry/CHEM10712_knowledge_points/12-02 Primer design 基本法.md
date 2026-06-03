---
title: '12.2 Primer design 基本法'
---

# 12.2 Primer design 基本法

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[12 PCR、primer design 与 DNA manipulation|12. PCR、primer design 与 DNA manipulation]]
- 导航：上一节：[[12-01 PCR 原理|12.1 PCR 原理]]；下一节：[[12-03 DNA manipulation 概念|12.3 DNA manipulation 概念]]

## 详细内容

课件给出简化 Tm 公式：

```text
Tm = 2 * (A + T) + 4 * (G + C)
```

primer 设计原则：

- forward primer 与目标序列 5' 端相同方向，写 5'->3'。
- reverse primer 是目标 3' 端互补链的 reverse complement，也写 5'->3'。
- 两个 primers 的 Tm 应接近。
- primer 需要能特异性夹住 target region。

课件例子：

```text
pF: ATGGCCATGATTACGGATTCA
pR: TTATTTTTGACACCAGACCAAC
Tm approx. 60 C
```

常见错误：

- reverse primer 直接抄 template 末端而没有 reverse complement。
- 忘记所有 primers 都要按 5'->3' 写。
- 只看序列长度不看 GC content。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

primer 设计的核心是方向性。forward primer 与 coding/top strand 5' 端序列相同；reverse primer 必须是另一端的 reverse complement，但书写时仍然是 5'->3'。这是最容易错的地方。

简化 Tm 公式 Tm = 2(A+T)+4(G+C) 只适合短 oligos 粗估。真实设计还要考虑 primer length、GC clamp、secondary structure、self-complementarity、specificity 和两个 primers 的 Tm 匹配。

## 原文小点逐条解释

- **原文小点：** forward primer 与目标序列 5' 端相同方向，写 5'->3'。
  - **讲解：** forward primer 与目标区域左端的 coding/top strand 同序列，但它实际 anneal 到互补链上，并从自身 3-end 向目标内部延伸。
- **原文小点：** reverse primer 是目标 3' 端互补链的 reverse complement，也写 5'->3'。
  - **讲解：** reverse primer 必须是目标区域右端序列的 reverse complement；写出来仍然是 5->3，因为 polymerase 只能从 primer 的 3-OH 延伸。
- **原文小点：** 两个 primers 的 Tm 应接近。
  - **讲解：** 两个 primers 的 Tm 接近，annealing step 才能在同一温度下同时有效结合；GC content 越高，Tm 通常越高。
- **原文小点：** primer 需要能特异性夹住 target region。
  - **讲解：** primer 的 3-end 尤其要特异，因为错误配对若仍能被 polymerase 延伸，会产生非目标扩增产物。
- **原文小点：** reverse primer 直接抄 template 末端而没有 reverse complement。
  - **讲解：** reverse primer 必须是目标区域右端序列的 reverse complement；写出来仍然是 5->3，因为 polymerase 只能从 primer 的 3-OH 延伸。
- **原文小点：** 忘记所有 primers 都要按 5'->3' 写。
  - **讲解：** 所有核酸序列默认按 5->3 书写；这是一条书写规则，也对应 polymerase 延伸方向。
- **原文小点：** 只看序列长度不看 GC content。
  - **讲解：** GC content 影响 duplex stability 和 Tm；只看长度会忽略 G-C pair 更强的 stacking/H-bond contribution。

## 做题和复习时怎么用

做 primer 题先在目标序列两端标 5'/3'，再写 forward 和 reverse complement。最后用公式估 Tm，确保两者相近。

## 常见误区

- 忘记 nucleic acid 和 primer 都按 5->3 方向书写。
- 只列工具名称，不说明每个 DNA element 或 enzyme 的功能。

## 关联知识点

- [[11-05 Gene features|gene features]]
- [[13-03 E. coli transformation|transformation]]

<!-- END_DETAILED_EXPLANATION -->
