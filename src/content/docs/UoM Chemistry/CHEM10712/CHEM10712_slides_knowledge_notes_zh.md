---
title: 'CHEM10712 slides 知识点整理与讲解'
---

# CHEM10712 slides 知识点整理与讲解

来源范围：本讲义基于 `slides/` 文件夹中实际存在的 PPTX/PDF/DOCX 课件与 workshop 文件整理。`PP_CHEM10712/` 中的 mock exam/past paper 文件未作为主要知识来源。文件夹中没有单独的 Lecture 6、18、20、24 课件；这些内容只按已有 overview/workshop 中出现的部分整理。

> Obsidian 版：二级章节与三级知识点标题已链接到独立笔记；总索引见 [[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]。

## [[00 课程总图：为什么这些知识点连在一起|0. 课程总图：为什么这些知识点连在一起]]

CHEM10712 的核心问题是：如何从分子结构理解生命系统的功能，并进一步工程化生命系统。课程可以压缩成一条逻辑链：

1. 生命不是由很多神秘元素组成，而主要由 C、H、O、N、P、S 和少量金属/离子组成。
2. 少数小分子单元组合成四大类生物分子：蛋白质、核酸、糖、脂质。
3. 水环境决定了这些分子的相互作用方式：氢键、酸碱平衡、疏水效应、膜自组装。
4. 结构决定功能：一级序列影响三维结构；三维结构决定结合、催化、调控、稳定性。
5. DNA 信息流控制蛋白质生产：DNA -> RNA -> protein，并通过调控和突变改变功能。
6. 现代生物技术利用这些原理做 recombinant protein、CRISPR、metabolic engineering、directed evolution。

考试时不要把每个 lecture 当成孤立事实背诵。更高效的理解方式是：每遇到一个生物分子，问四个问题：

- 它由什么 building blocks 组成？
- 在水中是什么结构/电荷/构象？
- 它靠什么相互作用实现功能？
- 如何通过突变、条件改变或工程化改变它的功能？

## [[01 生命的分子基础与细胞作为 building block|1. 生命的分子基础与细胞作为 building block]]

### [[01-01 Biological chemistry 的对象|1.1 Biological chemistry 的对象]]

Biological chemistry 研究生命的分子层面：蛋白质、核酸、糖、脂质、代谢物、膜、细胞器、反应网络。它服务于 biocatalysis、drug design、toxicology、pharmacology、medicine、cell factory 和 synthetic biology。

关键认识：

- 人体有大量细胞和蛋白，但底层化学原则相对统一。
- 生命分子的多样性主要来自组合复杂度，而不是元素种类复杂。
- LUCA, last universal common ancestor, 解释了为什么不同生命共享 DNA 信息储存、蛋白质、ATP、核心代谢网络等原则。

### [[01-02 生命需要什么|1.2 生命需要什么]]

slides 中反复出现的“recipe for life”可以整理为：

1. 少数化学元素形成基本 building blocks。
2. building blocks 聚合成多样的 polymers。
3. polymers 中出现 replication、variation、selection。
4. 自复制系统被膜包裹，形成早期细胞。
5. 由简单 prokaryotic cells 发展到更复杂的 eukaryotic cells。

进化所需的三个条件：

- variation：有差异，例如随机聚合或复制错误产生不同序列。
- selection：某些分子因结合、催化或稳定性更好被选择。
- replication：被选择的分子能被复制，且复制中可继续产生 variation。

这也是 directed evolution 的理论基础：人工制造多样性，筛选更好功能，再迭代。

### [[01-03 Prokaryotes原核生物 与 eukaryotes真核生物|1.3 Prokaryotes原核生物 与 eukaryotes真核生物]]

Prokaryotes原核生物：

- 结构相对简单，没有 nucleus。
- 常为单细胞。
- 生长快、易转化、常用于 cloning、protein expression、directed evolution。

Eukaryotes真核生物：

- 有 nucleus 和 organelles细胞器。
- 内部 compartmentalization 明显。
- mitochondria线粒体 和 chloroplasts叶绿体 可由 endosymbiosis内共生 理解。

Endosymbiont theory 内共生理论的证据：

- mitochondria/chloroplasts 有双层膜。
- 有自己的 circular DNA 和 ribosomes核糖体。
- 与现代 bacteria 有相似性。
- 解释 eukaryotic cells 如何获得高效 respiration/photosynthesis 呼吸作用/光合作用能力。

## [[02 水、pH、pKa 与生物分子的电荷状态|2. 水、pH、pKa 与生物分子的电荷状态]]

### [[02-01 为什么“biochemistry is aqueous chemistry”|2.1 为什么“biochemistry is aqueous chemistry”]]

水是生命环境的主要溶剂。E. coli 等细胞中水占很高比例。水的关键性质：

- O 原子近似 sp3，O-H 键强极化。
- 水分子形成强 H-bond network。
- 液态水仍高度氢键化。
- 水能很好溶解 polar/hydrophilic solutes。

非极性分子不易溶于水，不只是因为“水不喜欢油”，更重要是 entropy：

- non-polar solute 周围的水被迫形成较有序的 cage 笼子。
- 多个疏水分子聚集时，受限制的水减少。
- 因此 hydrophobic compounds coalesce 疏水化合物聚结是熵驱动的。

Amphiphilic molecules 两亲性分子同时有 hydrophilic head 和 hydrophobic tail，会在水中自组装，例如 micelles微乳液、bilayers、membranes膜。

### [[02-02 Proton transfer 与 Grotthuss mechanism 质子转移与格罗图斯机理|2.2 Proton transfer 与 Grotthuss mechanism 质子转移与格罗图斯机理]]

H3O+ 和 OH- 在水中移动异常快，因为 proton 可以通过氢键网络“跳跃”，不需要一个完整离子慢慢扩散。这就是 Grotthuss mechanism。

结论：

- acid-base reactions 在水中通常很快。
- ==proton transfer 是大量酶反应和生物反应的核心步骤==。

### [[02-03 pH、pKa 与 Henderson-Hasselbalch|2.3 pH、pKa 与 Henderson-Hasselbalch]]

弱酸：

```text
HA <=> H+ + A-
Ka = [H+][A-]/[HA]
pH = pKa + log([A-]/[HA])
```

必须会用的判断：

- ==pH = pKa 时，[A-] = [HA]，即 50% 去质子化，50% 质子化。==
- ==pH 比 pKa 高 1，base/acid = 10。==
- ==pH 比 pKa 高 2，base/acid = 100。==
- ==pH 低于 pKa，质子化形式更多。==

例如 workshop 中 Tyr side chain pKa = 10，在 pH 12：

```text
log([Y-]/[YH]) = 12 - 10 = 2
[Y-]/[YH] = 100
```

所以 Tyr >99% 去质子化。

### [[02-04 Buffer|2.4 Buffer]]

==buffer 在 pH 接近 pKa 时最有效，因为酸和共轭碱浓度相近，能吸收加入的 H+ 或 OH-。==

phosphate buffer 例子：

- H2PO4-/HPO4^2- 的 pKa 约 6.8。
- pH 6.8 时二者各约 0.05 M，如果总浓度 0.1 M。
- 升到 pH 7.8 时，base/acid = 10，HPO4^2- 约 0.091 M，需要加入约 0.041 M NaOH。
- 再升到 pH 8.8 时，HPO4^2- 约 0.099 M，只需再加约 0.008 M NaOH。

==这说明：buffer capacity 在 pH = pKa 附近最大，离 pKa 越远越弱。==

### [[02-05 Protein environment 会改变 pKa|2.5 Protein environment 会改变 pKa]]

课件特别强调：textbook pKa 只是 free amino acid 的参考值，protein fold 中的局部环境会显著改变 pKa。

规则：

- ==若去质子化后的 charged base 被稳定，pKa 降低。==
- ==若质子化后的 charged acid 被稳定，pKa 升高。==
- ==apolar environment 不利于带电形式，可能使酸更难去质子化，或使碱更容易失去质子。==
- ==salt bridge  盐桥能稳定带电形式。==
- ==同号电荷相近会 destabilize 带电形式。==

Asp 例子：

- Asp carboxylate 若被 Lys salt bridge 稳定，去质子化形式稳定 Asp⁻ 和 Lys⁺，pKa 低。
- 在 polar/water-like environment 中接近正常。
- 在 apolar environment 中 carboxylate 不稳定，pKa 高。

Lys 例子：

- Lys-NH3+ 若与 Asp salt bridge 形成，质子化形式稳定，pKa 高。
- apolar environment 或附近正电荷会使 Lys-NH3+ 不稳定，pKa 低。

## [[03 氨基酸、肽与蛋白质化学|3. 氨基酸、肽与蛋白质化学]]

### [[03-01 alpha-amino acids （α-氨基酸） 与 chirality 手性|3.1 alpha-amino acids （α-氨基酸） 与 chirality 手性]]

Proteinogenic amino acids 蛋白质组成氨基酸是 alpha-amino acids。在 pH 7 附近通常以 zwitterion 内盐形式存在：

- ==amino group 通常带正电。==
- ==carboxylate 通常带负电。==
- 氨基（–NH2）在 α 碳上
- 羧基（–COOH）在 α 碳上


==除 glycine  甘氨酸外，alpha carbon 有 stereocentre。天然蛋白几乎只用 L-amino acids。多数 L-amino acids 对应 S configuration （R/S的S），但 cysteine 半胱氨酸 因优先级不同是R，是例外。==

### [[03-02 Peptide bond 肽键与方向性|3.2 Peptide bond 肽键与方向性]]

两个氨基酸形成 ==peptide bond 是 dehydration/amide bond formation 脱水/酰胺键==的形成。==在水中并非自发容易发生，需要生物体系活化和酶促。==

多肽写法约定：

- ==从 N-terminus 写到 C-terminus。==
- ==一条 polypeptide 只有一个 free N-terminus 和一个 free C-terminus，除非被修饰。==
- ==side chains 的电荷由 pH、pKa 和局部环境决定。==

组合复杂度：

- 若每个位置有 20 种氨基酸，长度 N 的多肽理论上有 20^N 种。
- 10 个氨基酸的精确序列，如 ELVISLIVES，随机出现概率是 1/20^10。
- 平均蛋白约数百个氨基酸，组合复杂度极大。

### [[03-03 20 种氨基酸的功能分组|3.3 20 种氨基酸的功能分组]]

Aliphatic/non-reactive 脂肪族/非反应性：

- Gly, Ala, Val, Leu, Ile。
- 多为 hydrophobic，不太参与反应化学。

Hydrophobic/nonpolar 疏水/非极性：

- Met, Pro, Phe, Trp。
- Met 有 thioether 但反应性不高。
- Pro 是 secondary amine，会强烈影响 backbone conformation。
- Trp 体积大且稀有，有 intrinsic fluorescence。

Polar/reactive 极性/反应性：

- Ser, Thr：alcohol。
- Asn, Gln：amide。
- Tyr：phenol，强碱条件可形成 phenolate。
- Cys：thiol，pKa 约 8.4，接近中性 pH，容易形成 thiolate，是强 nucleophile。

Charged/reactive 带电/活性：

- Asp, Glu：carboxylates，常作 acid/base 或 electrostatic groups。
- Lys, Arg：basic side chains。
- His：imidazole，pKa 接近生理 pH，能在质子化/中性之间切换，常用于 acid-base catalysis。

考试重点不是背所有分类表，而是知道哪些 side chains 能做化学：

- acid-base chemistry：Asp/Glu, His, Cys, Lys，有时 Tyr/Arg。
- nucleophiles：Cys, Lys, Tyr, His, Asp/Glu。
- redox：天然氨基酸中主要是 Cys。
- electrophiles 和强 redox chemistry 通常需要 cofactors 或 metal ions。

### [[03-04 Lys, Cys, Trp 的代表性反应|3.4 Lys, Cys, Trp 的代表性反应]]

Lysine：

- epsilon-amino group 可与 aldehydes 形成 imine/Schiff base。
- formaldehyde 可通过 Lys-Lys crosslink 固定生物组织。
- 在酶中，Lys 与 carbonyl 形成 Schiff base 后，可降低 alpha C-H 的 pKa，帮助形成 carbanion/enamine/enol 类中间体。

Cysteine：

- Cys-SH 可氧化形成 disulfide bond，两个 Cys 形成 cystine。
- Cys thiolate 在 pH 7 附近可存在，反应性强。
- iodoacetamide 等 alkylating agents 常优先修饰 Cys。
- 修饰后的 Cys 不能再形成 cystine/disulfide bridge。

Tryptophan：

- Trp 有 intrinsic fluorescence。
- fluorescence 对局部环境敏感，可报告 protein folding、ligand binding、conformational change。

### [[03-05 Post-translational modification 与非蛋白氨基酸|3.5 Post-translational modification 与非蛋白氨基酸]]

蛋白质的化学能力可通过 post-translational modifications 扩展，例如：

- phosphorylation。
- methylation。
- acetylation。
- hydroxylation。
- carboxylation。

课件也提醒有 non-proteinogenic amino acids，它们可作为 signaling molecules、metabolic intermediates 或 cofactors 的组成部分。

## [[04 蛋白质折叠、稳定性、动力学与工程化|4. 蛋白质折叠、稳定性、动力学与工程化]]

### [[04-01 Anfinsen experiment|4.1 Anfinsen experiment]]

RNase A 变性/还原后，如果在去除 urea 的同时允许氧化形成 disulfide bonds，可以恢复活性。这说明 native state 信息编码在 amino acid sequence 中。

如果先在 denatured state 下随机氧化形成 disulfides，再去除 urea，活性只恢复很少，因为 disulfide pairing 被打乱。

加入少量 thiol 后能重新交换 disulfides 并恢复活性，说明正确 native state 在这些条件下是最稳定构象。

核心结论：

- sequence contains folding information。
- disulfide pairing 必须与 folding pathway 配合。
- native state 常是热力学稳定态，但细胞环境中也可能是 kinetic/metastable state。

### [[04-02 Levinthal paradox 与 folding landscape|4.2 Levinthal paradox 与 folding landscape]]

如果蛋白随机搜索所有 backbone 构象，折叠时间会极长。但真实蛋白可在秒或更快尺度折叠。

解决思路：

- folding 不是完全随机搜索。
- protein folding 沿着 energy landscape 发生。
- 可能有多个 folding pathways、intermediates 和 favored routes。

### [[04-03 Misfolding 与 aggregation|4.3 Misfolding 与 aggregation]]

蛋白可能 misfold，形成不同于 native state 的结构。常见结果：

- aggregation。
- amyloid fibrils。
- protein misfolding diseases。

在高蛋白浓度、crowded cell environment 或 denaturation 后，intermolecular contacts 可能使 aggregation 更有利，导致不可逆失活。

### [[04-04 Chaperones 与 GroEL GroES|4.4 Chaperones 与 GroEL/GroES]]

若 native state 在细胞中只是 metastable，细胞需要 chaperones 帮助蛋白走向正确 folding route。

GroEL/GroES 的基本机制：

- 提供 folding chamber。
- 初始内壁偏 hydrophobic，可结合 unfolded/non-native protein。
- ATP hydrolysis 驱动 conformational change，使内壁更 hydrophilic。
- 隔离其他蛋白，减少 aggregation，促进 folding。

### [[04-05 Tm、稳定性与溶液条件|4.5 Tm、稳定性与溶液条件]]

Tm 是衡量 folded/native state 相对稳定性的常用指标。可用 fluorescence dye 监测：

- unfolded protein 暴露 hydrophobic pockets。
- dye 结合后 fluorescence 增强。
- 随温度升高得到 melting transition。

影响 Tm 的因素：

- temperature。
- pH。
- ionic strength。
- salt type。
- co-solutes，如 glycerol、urea。

Thermophilic proteins 通常更稳定。比较 psychrophilic、mesophilic、thermophilic homologs 可得到稳定性规律：

- hydrophobic core packing 更好。
- 更多 long-range contacts。
- 更多 disulfide bonds。
- 更少 Gly、更多 Pro。
- 更多 intramolecular ionic interactions。

### [[04-06 Disulfide bonds 为什么稳定蛋白|4.6 Disulfide bonds 为什么稳定蛋白]]

disulfide bond 的稳定作用不只是多了一根 covalent bond，更重要是降低 unfolded state 的 conformational entropy。

规则：

- Cys 在序列上相距越远，但三维结构中越近，形成 disulfide 后对 unfolded chain 的限制越大。
- 长程 disulfide 更能降低 unfolded state 的自由度，因此稳定性提升更明显。
- extracellular proteins 常富含 disulfides，因为胞外环境更 oxidising、pH/盐/温度更变化。

### [[04-07 稳定性与活性的 trade-off|4.7 稳定性与活性的 trade-off]]

不是所有蛋白越稳定越好。功能通常需要 dynamics：

- ligand binding 需要构象调整。
- catalysis 需要 active-site motion。
- allostery 需要远程 conformational changes。

增强 rigidity/stability 可能降低低温活性。这就是 stability-activity trade-off。

## [[05 Coiled-coil 与 protein-ligand binding|5. Coiled-coil 与 protein-ligand binding]]

### [[05-01 Coiled-coil 的 heptad repeat|5.1 Coiled-coil 的 heptad repeat]]

coiled-coil 常由 heptapeptide motif `abcdefg` 重复形成。由于 alpha helix 每圈约 3.5 个 residues，7 个 residues 约对应两圈，因此 a/d 位点可周期性朝同一侧形成 hydrophobic interface。

常见规律：

- a 和 d 位点常为 hydrophobic residues。
- e/g 位点常参与 charged/polar interactions，帮助决定 parallel 或 anti-parallel directionality。
- coiled-coil 例子包括 keratin、leucine zipper、tropomyosin/actin complex。

工程化思路：

- 设计 hydrophobic interface 让两条 helix 配对。
- 用 charged residues 设计方向性。
- 加入 Cys 形成 disulfide bond 可提高 thermostability。
- 也可通过改变 buffer、salt、co-solute 等非序列方式稳定。

### [[05-02 Kd 与 ligand binding|5.2 Kd 与 ligand binding]]

基本平衡：

```text
P + L <=> PL
Kd = [P][L]/[PL]
```

理解：

- Kd 越小，binding 越强。
- 当 free ligand concentration = Kd 时，理想情况下约 50% protein bound。
- 若 ligand 远大于 protein，可近似 fractional binding = [L]/(Kd + [L])。
- 要达到 90% bound，在 free ligand 近似条件下需 [L]free = 9Kd。

但 workshop 特别提醒：当 protein concentration 不可忽略时，不能只用 total ligand = 9Kd；还要补足被 protein 结合掉的 ligand。

## [[06 糖：monosaccharides、rings、glycosidic bonds 与 reducing sugars|6. 糖：monosaccharides、rings、glycosidic bonds 与 reducing sugars]]

### [[06-01 Carbohydrates saccharides 的定义与分类|6.1 Carbohydrates/saccharides 的定义与分类]]

Saccharides 是最丰富的生物分子之一，近似公式为 `(CH2O)n, n >= 3`。

按聚合程度：

- monosaccharides：单糖，monomers。
- oligosaccharides：短糖链，常接在 proteins/lipids 上，形成 glycoproteins/glycolipids。
- polysaccharides：长糖链，可非常大，例如 cellulose、starch、glycogen。

糖的功能：

- energy storage：starch in plants, glycogen in animals。
- structural：cellulose。
- recognition/regulation：glycoproteins/glycolipids 的 sugar head groups。
- metabolism：glucose 是重要 energy source。

### [[06-02 Monosaccharide classification|6.2 Monosaccharide classification]]

按 carbonyl：

- aldose：含 aldehyde，如 glucose。
- ketose：含 ketone，如 ribulose、fructose。

按碳数：

- triose, tetrose, pentose, hexose, heptose。

组合命名：

- glucose = aldohexose。
- ribulose = ketopentose。

### [[06-03 Chirality, D L 与 stereoisomers|6.3 Chirality, D/L 与 stereoisomers]]

糖有多个 chiral centres，因此 stereoisomers 很多。

课件公式：

- n-carbon ketoses 有 `2^(n-3)` 个 stereoisomers。
- n-carbon aldoses 有 `2^(n-2)` 个 stereoisomers。

D/L 判断：

- 看离 carbonyl 最远的 chiral centre。
- 与 D-glyceraldehyde 绝对构型相同的是 D sugar，反之是 L sugar。

生物中 D sugars 比 L sugars 丰富；这与蛋白中 L-amino acids 丰富相呼应。

Epimers：

- 只在一个 chiral carbon 上构型不同的 diastereomers。
- 例如 glucose 与 mannose 是常见 epimer 关系。

### [[06-04 Ring formation, Haworth, anomers|6.4 Ring formation, Haworth, anomers]]

糖的 aldehyde/ketone 可与同一分子内的 alcohol 形成 hemiacetal/hemiketal，导致 cyclisation。

环大小：

- 6-membered ring = pyranose。
- 5-membered ring = furanose。

Haworth projection 是画糖环的常用方式，比 chair/boat 更方便。

Anomeric carbon：

- aldose 中通常是 C1。
- ketose 中常是原 carbonyl carbon，如 fructose 的 C2。

Anomers：

- alpha/beta anomers 是 anomeric carbon 构型不同的 diastereomers。
- 对 D sugars，alpha anomer 的 anomeric OH 与 CH2OH 在环的 opposite side；beta 在 same side。

### [[06-05 Mutarotation 与构象稳定性|6.5 Mutarotation 与构象稳定性]]

水中 glucose 线性形式很少，cyclic forms 占主要比例。alpha 和 beta anomers 可通过 linear form 互相转化，称为 mutarotation。

要点：

- mutarotation 经 linear form。
- acid/base catalysed。
- chair forms 通常比 boat forms 稳定。
- bulky substituents 倾向 equatorial positions。
- 不同 monosaccharides 的 anomer 稳定性不同。

### [[06-06 Glycosidic bonds 与 reducing sugars|6.6 Glycosidic bonds 与 reducing sugars]]

Glycosidic bond：

- carbohydrate 与另一基团通过 condensation reaction 形成的键。
- O-glycosidic bonds 在 polysaccharides 中类似 peptide bonds 在 proteins 中的作用。
- glycosidic bonds 相对稳定，不能 mutarotate。
- hydrolysis 由 sugar-selective glycosidases 催化。

Disaccharide 命名例子：

- sucrose：O-alpha-D-glucopyranosyl-(1 -> 2)-beta-D-fructofuranoside。
- `(1 -> 2)` 表示 glucose C1 与 fructose C2 连接。
- 也可有 `(1 -> 4)` 如 lactose，`(1 -> 6)` 如 isomaltose。

Reducing sugar：

- 有 free anomeric carbon，能经 linear form 暴露 aldehyde/ketone，因而可被 mild oxidation。
- lactose 是 reducing sugar。
- sucrose 的两个 anomeric carbons 都参与 glycosidic bond，因此不是 reducing sugar。

氧化：

- aldose 的 aldehyde 轻度氧化 -> aldonic acid。
- primary alcohol 氧化 -> uronic acid。
- uronic acids 可形成 lactones。

## [[07 Lipids 与 membranes|7. Lipids 与 membranes]]

### [[07-01 Lipid 的定义|7.1 Lipid 的定义]]

Lipids 是 soluble in organic solvents but sparingly soluble in water 的 biomolecules。

包括：

- fatty acids。
- triacylglycerols。
- glycerophospholipids。
- sphingolipids。
- glycolipids。
- steroids。
- some vitamins/hormones。
- non-protein membrane components。

### [[07-02 Fatty acids|7.2 Fatty acids]]

Fatty acids 是带 long-chain hydrocarbon sidechain 的 carboxylic acids。性质取决于：

- chain length。
- degree of unsaturation。
- double bond position。
- cis/trans isomerism。

关键规律：

- 自然界 double bonds 多为 cis。
- cis double bonds 造成 chain kink，降低 packing 和 van der Waals interactions。
- 因此 unsaturation 通常降低 melting point。
- 自然中 fatty acids 多以 esterified form 存在，而不是 free carboxylate。

命名：

- 例如 oleic acid = 18:1n-9 或 omega-9。
- 18 表示 18 carbons。
- 1 表示一个 double bond。
- n-9/omega-9 表示从 omega end 算，最后一个 double-bonded carbon 的位置。

Polyunsaturated fatty acids 常见 1-in-3 arrangement，通常不 conjugated：

- linoleic acid: 18:2n-6。
- alpha-linolenic acid: 18:3n-3。

### [[07-03 Triacylglycerols|7.3 Triacylglycerols]]

Triacylglycerols/triglycerides 是 glycerol 的 fatty acid triesters。

- simple triacylglycerols：三个 R groups 相同。
- mixed triacylglycerols：两个或三个不同 fatty acid residues。

Fats vs oils：

- fats 室温固体，通常较 saturated。
- oils 室温液体，通常较 unsaturated。
- plant oils 通常比 animal fats 含更多 unsaturated fatty acids。

### [[07-04 Membrane lipids|7.4 Membrane lipids]]

Glycerophospholipids：

- biological membranes 的主要 lipid components。
- 基本骨架是 sn-glycerol-3-phosphate。
- R1/R2 是 fatty acids。
- X 是 polar head group。
- amphiphilic，因此能形成 bilayers。

Sphingolipids：

- 来自 sphingosine/dihydrosphingosine 等 amino alcohols。
- fatty acid 通过 amide bond 连接，而不是 glycerolipid 中常见 ester。
- 也是 membranes 的重要组分。

Glycolipids：

- carbohydrate 通过 glycosidic covalent bond 接在 lipid 上。
- 不限于 sphingolipids，也可有 glycoglycerolipids。
- sugar head groups 常参与 cell-surface recognition/regulation。

Gangliosides：

- 复杂 sphingoglycolipids。
- oligosaccharide head group 中含至少一个 sialic acid。
- 在 cell surface membranes 和 brain lipids 中重要。

### [[07-05 Steroids 与 cholesterol|7.5 Steroids 与 cholesterol]]

Steroids 源于 cyclopentanoperhydrophenanthrene skeleton。

Cholesterol：

- animal plasma membranes 的主要成分。
- 因 OH group 而 weakly amphiphilic。
- 可调节 membrane properties。
- 是 steroid hormones 的 precursor。

Steroid hormones 例子：

- estradiol/estrogens。
- testosterone。
- anabolic steroid medications。

### [[07-06 Membrane permeability|7.6 Membrane permeability]]

Cell membranes 是 selective barrier。

可较容易通过：

- gases: O2, CO2, N2。
- 一些 small uncharged polar molecules，如 water、urea、ethanol，部分或完全可通过。

通常不能直接通过：

- large uncharged polar molecules，如 glucose/fructose。
- ions，如 K+, Na+, Cl-, HCO3-。
- charged polar molecules，如 ATP、amino acids、G6P。

因此细胞需要 membrane proteins：

- passive pores/channels。
- active transporters。

膜性质由 lipid composition 决定，包括 fluidity、curvature、melting/transition temperature。

## [[08 酶：specificity、cofactors、allostery 与 kinetics|8. 酶：specificity、cofactors、allostery 与 kinetics]]

### [[08-01 Enzyme 是 macromolecular biological catalyst|8.1 Enzyme 是 macromolecular biological catalyst]]

与普通催化剂相比，酶通常有：

- higher reaction rate。
- mild conditions：aqueous solution、near-neutral pH、ambient temperature/pressure。
- high specificity：substrate/product stereospecificity、regiospecificity、limited side products。
- capacity for control：allosteric control、covalent modification、expression/degradation control。

酶反应基本写法：

```text
E + S -> E + P
```

但更真实模型包括 enzyme-substrate complex、intermediates、product dissociation 等步骤。

### [[08-02 Active site interactions 与 stereospecificity|8.2 Active site interactions 与 stereospecificity]]

substrate-active site interactions 可包括：

- van der Waals。
- hydrophobic interactions。
- electrostatic interactions。
- H-bonding。
- 有时形成 covalent enzyme-substrate intermediate。

因为 enzymes 本身由 chiral amino acids 构成，active sites 是 asymmetric 的，所以可选择性结合 stereoisomers，并产生 stereospecific products。

YADH, yeast alcohol dehydrogenase：

- 催化 alcohol 与 NAD+ 之间的 hydride transfer。
- NADH/NADPH 是生物中主要 hydride donors。
- NAD+/NADP+ 是对应 hydride acceptors。
- YADH 中 hydride transfer 的面选择性由 active site geometry 决定。

### [[08-03 Cofactors coenzymes 为什么重要|8.3 Cofactors/coenzymes 为什么重要]]

天然 amino acids 的反应性有限：

- 缺少强 electrophiles。
- redox chemistry 基本只靠 Cys 不够。

因此许多 enzymes 使用 cofactors/coenzymes/metal ions 扩展化学能力。例如：

- NAD(P)+/NAD(P)H：hydride transfer。
- FAD：redox chemistry。
- coenzyme B12。
- Zn in YADH。

### [[08-04 Enzyme control 与 ATCase|8.4 Enzyme control 与 ATCase]]

反应速率可通过以下方式控制：

- enzyme concentration。
- substrate concentration，特别在 [S] < Km 时。
- active enzyme fraction。
- enzyme/cofactor synthesis or degradation。
- allosteric conformational control。

ATCase, aspartate transcarbamoylase：

- 催化 pyrimidine biosynthesis 的第一步特异反应。
- 有 cooperative substrate binding。
- 受 CTP feedback inhibition。
- 受 ATP activation。
- 目的：平衡 ATP:CTP。

Allostery：

- enzyme 有 active R state 和 inactive T state。
- activator preferentially binds R state。
- inhibitor preferentially binds T state。
- allosteric ligand 通常不结合 active site，而结合 separate binding site。

### [[08-05 Michaelis-Menten kinetics|8.5 Michaelis-Menten kinetics]]

模型：

```text
E + S <=> ES -> E + P
```

常数：

- k1/kf：substrate binding，second-order。
- k-1/kr：substrate dissociation，first-order。
- k2/kcat：chemical step，first-order。

核心公式：

```text
v = kcat [E]T [S] / (Km + [S])
Vmax = kcat [E]T
```

参数理解：

- v：reaction velocity，product formation 或 substrate consumption rate。
- kcat：turnover number，每个 enzyme active site 每秒生成多少 product。
- Km：当 v = Vmax/2 时的 [S]；常被粗略视作 substrate affinity 指标，但严格上取决于机制。
- kcat/Km：catalytic efficiency，尤其适合比较低 [S] 下的酶表现。

MM model 假设/限制：

- single substrate。
- steady state。
- free ligand approximation: [S] ~ [S]0。
- 无 allosterism。
- 单一 irreversible chemical step。
- 不考虑复杂 intermediates/EP complex。

### [[08-06 如何从 MM plot 读参数|8.6 如何从 MM plot 读参数]]

从 saturation curve：

- plateau 给 Vmax。
- Vmax 除以 [E]T 得 kcat。
- v = Vmax/2 时对应的 [S] 是 Km。

课件例子：

- enzyme A: kcat = 10 s^-1, Km = 10 uM，kcat/Km = 1.0 uM^-1 s^-1。
- enzyme B: kcat = 3 s^-1, Km = 2 uM，kcat/Km = 1.5 uM^-1 s^-1。
- 若以 catalytic efficiency 比较，B 更好。

Workshop 例子：

- condition 1: kcat = 1000 s^-1, Km = 1 mM，kcat/Km = 1000 s^-1 mM^-1。
- condition 2: kcat = 30 s^-1, Km = 0.1 mM，kcat/Km = 300 s^-1 mM^-1。
- condition 1 的 catalytic efficiency 更高。

### [[08-07 Competitive inhibition 与 TSAs|8.7 Competitive inhibition 与 TSAs]]

Competitive inhibitor：

- 与 substrate 竞争 active site。
- 通常结构类似 substrate，但不反应。
- high [S] 可部分克服 inhibition。
- Vmax 不变。
- apparent Km 增大。

Transition state analogues, TSAs：

- transition state 寿命极短，不能分离。
- TSA 是稳定分子，模仿 transition state 的结构或 charge distribution。
- 因酶本质上稳定 transition state，好的 TSA 可有很高 affinity。
- 可成为有效 drugs。

### [[08-08 Enzyme catalysis 的本质|8.8 Enzyme catalysis 的本质]]

酶通过降低 activation free energy 加速反应。常用策略：

- substrate binding 和 proximity/orientation。
- acid-base catalysis。
- covalent catalysis。
- electrostatic stabilization。
- transition state stabilization。
- cofactor/metal-assisted catalysis。

考试中常要求用 arrow pushing 解释，例如 keto-enol tautomerisation。要答清：

- 哪个 residue 作 acid，哪个作 base。
- transition state/charge distribution 如何被 stabilised。
- mutation to Ala 会怎样影响 kcat 和 Km。

一般判断：

- 若 residue 直接参与催化，mutating to Ala 会显著降低 kcat。
- 若 residue 主要参与 binding，Km 更可能变大。
- 若 residue 同时参与 binding 和 catalysis，两者都可能受影响。

## [[09 Metabolism 与 biocatalysis 在课件中的定位|9. Metabolism 与 biocatalysis 在课件中的定位]]

文件夹中没有完整独立的 Hay Lecture 5/6 slides，但 syllabus、workshop 和 L22 中反复出现相关概念。

### [[09-01 Metabolism 的核心理解|9.1 Metabolism 的核心理解]]

Metabolism 是大量 enzyme-catalysed reactions 的网络。

- catabolism：分解 nutrients，产生能量/还原力/precursors。
- anabolism：合成 biomolecules，需要 energy 和 building blocks。
- ATP 是普遍 energy currency。
- 代谢调控常发生在 thermodynamically favourable 或 pathway-committed steps。

Workshop 提到 glycolytic enzymes 的 thermodynamic properties，并要求判断哪些适合被 co-substrate/coenzyme availability 调控。答题思路：

- near-equilibrium steps 通常由 substrate/product concentrations 推动。
- far-from-equilibrium steps 更适合 regulation。
- 若反应依赖 ATP/NADH/NAD+/其他 cofactors，其 availability 可作为调控因素。

### [[09-02 Biocatalysis 与 green chemistry|9.2 Biocatalysis 与 green chemistry]]

Biocatalysis 使用 enzymes 或 engineered cells 做化学转化。优势：

- 温和条件。
- 高 selectivity。
- 可减少 waste。
- 可在 aqueous/renewable feedstock 条件下工作。

限制：

- enzyme stability。
- substrate scope。
- product inhibition/toxicity。
- cofactor supply。
- scale-up 和 host engineering。

这为 L22/L23 的 metabolic engineering 和 directed evolution 铺垫。

## [[10 Origins of life 与 evolutionary principles|10. Origins of life 与 evolutionary principles]]

### [[10-01 Prebiotic chemistry|10.1 Prebiotic chemistry]]

slides 提到 early Earth 可能有 reducing atmosphere、volcanic activity、water sources 等条件。Miller-Urey experiment 说明在模拟早期地球条件下可以 abiotic synthesis amino acids。

Tibor Ganti 的 Chemoton 思路：life requires:

- metabolism。
- self-replication。
- bilipid membrane。

这与课程前面的“细胞 = selective barrier + information/control + reaction network”相呼应。

### [[10-02 RNA world hypothesis|10.2 RNA world hypothesis]]

RNA world hypothesis 的核心：

- 早期生命可能依赖 RNA 同时承担 information storage 和 catalysis。
- RNA 能形成复杂结构，且 ribozymes 能催化反应。
- 后来 DNA 更适合长期信息储存，proteins 更适合多样催化功能。

DNA/RNA/protein 的功能分工可以理解为演化后的专业化。

### [[10-03 LUCA 与 common biochemistry|10.3 LUCA 与 common biochemistry]]

LUCA 的证据：

- shared genetic code。
- ribosomes。
- common metabolic pathways。
- membranes。
- ATP synthase。
- DNA/RNA/protein based information flow。

生命共享：

- DNA 作为遗传信息。
- 20 amino acids 组成 proteins。
- central dogma。
- ATP 和核心 metabolism。

### [[10-04 Evolution mechanisms|10.4 Evolution mechanisms]]

分子层面的 evolution 来自 DNA sequence changes：

- point mutations。
- insertions/deletions。
- recombination。
- gene duplication/divergence。

突变可能改变：

- protein sequence。
- protein structure。
- catalytic/binding function。
- fitness。

Natural selection 会富集带来 fitness benefit 的 variants。

## [[11 Nucleic acids、central dogma 与 genetic regulation|11. Nucleic acids、central dogma 与 genetic regulation]]

### [[11-01 DNA 与 RNA 的区别|11.1 DNA 与 RNA 的区别]]

DNA：

- 由 2'-deoxyribose、phosphate、A/T/G/C bases 组成。
- 更稳定，适合 long-term information storage。
- duplex structure 较 rigid/conserved。
- DNA building blocks 是 dNTPs。

RNA：

- 由 ribose、phosphate、A/U/G/C bases 组成。
- 2'-OH 使 RNA 更易 chemical hydrolysis。
- 结构更 dynamic/varied。
- 可参与 catalysis，例如 ribozymes。
- RNA building blocks 是 NTPs。

课件列出的重点区别：

- RNA 是 ribonucleic acid，DNA 是 2'-deoxyribonucleic acid。
- RNA 用 U，DNA 用 T。
- DNA 常偏 C2' endo sugar conformation，RNA 常偏 C3' endo。
- DNA 更稳定，RNA 更 labile。
- DNA 更适合信息储存，RNA 更适合结构/催化/中介功能。

### [[11-02 Base pairing|11.2 Base pairing]]

基本配对：

- A-T in DNA。
- A-U in RNA。
- G-C。

配对的本质是 H-bond donor/acceptor pattern 和几何互补。G-C 通常氢键更多，因此 GC-rich regions 往往 Tm 更高；这也是 primer Tm 粗略估算中 GC 给 4 度、AT 给 2 度的原因。

### [[11-03 Central dogma|11.3 Central dogma]]

信息流：

```text
DNA -> RNA -> Protein -> Metabolites/Function
```

Replication：

- DNA polymerase 复制 DNA。
- 使用 dNTPs。
- 读写方向涉及 5'->3' linkage；nature read/writes from 5' to 3'。

Transcription：

- RNA polymerase 从 DNA template 转录 RNA。
- 使用 NTPs。
- 由 promoter 和 transcription start site 控制。

Translation：

- ribosome 将 mRNA codons 翻译成 protein。
- tRNA 携带 amino acids。
- aminoacyl-tRNA 是 amino acid 与 tRNA 的连接形式。

Ribosome：

- E. coli ribosome 有 50S large subunit 和 30S small subunit。
- 包含 rRNAs 和 proteins。
- 有 A site, P site, E site。

### [[11-04 Genetic code 与 mutations|11.4 Genetic code 与 mutations]]

Genetic code 把 codons 映射到 amino acids。DNA mutation 可导致：

- synonymous mutation：氨基酸不变。
- missense mutation：氨基酸改变。
- nonsense mutation：形成 stop codon。
- frameshift：reading frame 改变，影响更大。

课件中 L23 用序列变化展示：DNA 改变可影响 protein sequence，从而改变 protein function 和 fitness。

### [[11-05 Gene features|11.5 Gene features]]

一个 bacterial genetic unit 常见组成：

- promoter，包括 transcription start site。
- -35 和 -10 hex boxes，上游由 RNA polymerase 识别。
- +1 transcription start。
- ribosome binding site, RBS，通常位于 GOI 上游约 5-10 nt。
- start codon，常为 AUG。
- GOI, gene of interest/coding region。
- stop codon，例如 TAA。
- transcription terminator。

Transcription 发生在 promoter 开始；translation 从 RBS 定位 ribosome 后在 start codon 开始。

## [[12 PCR、primer design 与 DNA manipulation|12. PCR、primer design 与 DNA manipulation]]

### [[12-01 PCR 原理|12.1 PCR 原理]]

PCR 用 primers 和 DNA polymerase 扩增目标 DNA。

基本循环：

1. Denaturation：双链 DNA 分开。
2. Annealing：primers 与 template 互补结合。
3. Extension：polymerase 从 primer 3'-OH 延伸新链。

### [[12-02 Primer design 基本法|12.2 Primer design 基本法]]

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

### [[12-03 DNA manipulation 概念|12.3 DNA manipulation 概念]]

Lecture overview 中出现的 tools：

- restriction enzymes。
- ligases。
- plasmids。
- PCR/qPCR。
- electrophoresis。
- DNA reading/writing。

这些是 recombinant DNA 和 protein expression 的基础。

## [[13 Recombinant proteins 与 genome editing|13. Recombinant proteins 与 genome editing]]

### [[13-01 Applications|13.1 Applications]]

课件列出的应用：

- enzymes in washing powder。
- recombinant insulin。
- DNA arrays for cancer biomarkers。
- biosynthetic drug production，例如 artemisinin。
- biofuel production in engineered microorganisms。
- attenuated bacteria for vaccines。

### [[13-02 Plasmids|13.2 Plasmids]]

Plasmid：

- small circular double-stranded DNA。
- 常见于 bacteria。
- 与 chromosomal DNA 分离。
- 可 independently replicate。
- 大小常约 1-10 kbp。

主要 features：

- ORI：origin of replication，允许 host 复制 plasmid。
- antibiotic selection marker，例如 amp resistance。
- GOI：gene of interest。
- promoter、RBS、terminator 等 expression/regulation elements。

### [[13-03 E. coli transformation|13.3 E. coli transformation]]

流程：

1. Competent cell preparation：让细胞具备 uptake DNA 的能力。
2. Transformation：chemical heat shock 或 electroporation 形成暂时 pores。
3. Recovery：在无 antibiotics medium 中恢复膜和表达 resistance marker。
4. Selective plating：含 antibiotics 的 plate 上只有 carrying plasmid 的细胞生长。

为什么 E. coli 常用：

- transformation efficiency 高。
- 生长快。
- 操作便宜简单。
- 适合 cloning 和许多 bacterial protein expression。

限制：

- complex eukaryotic protein folding 可能不足。
- post-translational modifications 有限。
- disulfide-rich 或 glycosylated proteins 可能需要 yeast/insect/mammalian systems。

### [[13-04 Expression hosts 比较|13.4 Expression hosts 比较]]

课件列出 bacteria、yeast、plant、insect、mammalian hosts 的 pros/cons。总体规律：

- bacteria：快、便宜、易操作，但 folding/PTM 能力有限。
- yeast：比 bacteria 更适合某些 eukaryotic proteins，但仍有限。
- insect/mammalian：更适合复杂蛋白、protein complexes、PTMs，但慢、贵、操作复杂。

### [[13-05 CRISPR-Cas9|13.5 CRISPR-Cas9]]

CRISPR-Cas9 是 molecular scissors：

- guide RNA 识别 target DNA sequence。
- Cas9 protein 在特定位点切割 DNA。
- 后续 repair 可导致 knockout 或 precise editing。

应用：

- correct genetic defects。
- study gene function。
- disease models。
- crop/food/fermentation process engineering。
- potential therapeutics for cancer, HIV, genetic disorders。

伦理问题：

- germline editing 可遗传。
- eugenics 风险。
- misuse。
- access inequality。

## [[14 Microbial metabolic engineering 与 case studies|14. Microbial metabolic engineering 与 case studies]]

### [[14-01 Metabolic engineering 策略|14.1 Metabolic engineering 策略]]

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

### [[14-02 C1 feedstocks 与 engineered E. coli|14.2 C1 feedstocks 与 engineered E. coli]]

C1 compounds 便宜且来源广，可来自 fossil fuel、industrial by-products、biomass。Synthetic biology、genome engineering、laboratory evolution 可将 C1-based cell factories 用于 high-value products。

课件例子：

- engineered E. coli 通过 heterologous expression of RuBisCO, Prk, CA, Fdh 构建 synthetic CBB cycle。
- formate 提供 reducing power。
- deletion of pfk and zwf 使 growth 依赖 RuBisCO carboxylation。
- 结合 ALE 逐步减少外加 xylose，实现 CO2-based growth。

### [[14-03 Nanobodies|14.3 Nanobodies]]

Antibodies 识别 antigens，可用于 diagnostics/therapeutics。

Human mAb：

- 有 Fc region 和 Fab region。
- variable Fab 包含 heavy chain 和 light chain。

Camelid heavy-chain antibodies：

- 更简单，只含 heavy chain。
- Nanobodies 是短的 single-domain antibody fragments。

Nanobody 优势：

- smaller size。
- higher stability。
- easier genetic manipulation。
- 可用于 therapeutic、diagnostic、biosensor 等。

Phage display approach：

- camelids immunized 或使用 naive/synthetic library。
- 提取 lymphocytes/mRNA。
- PCR 获得 Nb sequences。
- transform into phage vectors/E. coli。
- biopanning 富集 high-affinity phages。
- phage-ELISA、sequencing、affinity testing。

### [[14-04 Artemisinin production|14.4 Artemisinin production]]

Artemisinin：

- 抗疟疾 terpene-based molecule。
- 原本从 Artemisia annua 提取。

Metabolic engineering 思路：

- 在 S. cerevisiae 中利用 FPP/terpene biosynthesis pathway 生产 artemisinic acid。
- overexpress pathway genes。
- repress competing squalene synthase ERG9。
- A. annua enzymes 将 amorphadiene 氧化到 artemisinic acid。
- 再 semi-synthesis 生成 artemisinin。

这展示了 synthetic biology + fermentation + chemistry 可以替代或补充植物提取。

## [[15 Molecular evolution、ALE 与 directed evolution|15. Molecular evolution、ALE 与 directed evolution]]

### [[15-01 DNA variation 如何影响 function|15.1 DNA variation 如何影响 function]]

DNA sequence 变化可导致 protein sequence 变化。protein sequence 变化可能影响：

- folding。
- active site geometry。
- substrate binding。
- stability。
- expression。
- cellular fitness。

不是所有突变都有益：很多 neutral 或 deleterious。Selection 会富集在特定环境下有 fitness benefit 的 variants。

### [[15-02 Adaptive Laboratory Evolution, ALE|15.2 Adaptive Laboratory Evolution, ALE]]

ALE 模拟自然选择，但在实验室中控制环境。

流程：

1. Microbes 在目标环境中长期培养。
2. Natural selection 富集 improved fitness 的 mutant strains。
3. 测定 phenotype improvement。
4. DNA sequencing 找 adaptive mutations。

应用：

- growth rate optimization。
- stress tolerance，例如 pH、antibiotics、temperature。
- alternative substrate utilization。
- increased product yield/titer。
- general discovery of genetic/system-level mechanisms。

ALE 常用于 microbial metabolic engineering，因为可把目标功能与 growth benefit 连接。

### [[15-03 Directed evolution, DE|15.3 Directed evolution, DE]]

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

### [[15-04 Directed evolution case sitagliptin transaminase|15.4 Directed evolution case: sitagliptin transaminase]]

Transaminases：

- PLP-dependent enzymes。
- 将 prochiral ketones 转为 chiral amines。

课件例子：

- 从天然 enzyme 出发，它有合适反应性但不识别 prositagliptin substrate。
- 通过 computational modeling 和 substrate walking 得到弱活性 transaminase。
- 多轮 mutagenesis/screening 后 catalytic activity 提升约 25,000-fold。
- engineered transaminase 比 rhodium catalyst 更高 yield/stereoselectivity，并降低 waste/cost。

这连接了 enzyme specificity、stereochemistry、green chemistry、directed evolution。

### [[15-05 Laboratory evolution 的应用清单|15.5 Laboratory evolution 的应用清单]]

可用于：

- 提高 enzyme catalytic activity。
- 改善 substrate specificity。
- 提高 enantioselectivity/diastereoselectivity。
- 增加 protein thermal/pH/solvent stability。
- 发展 industrial biocatalysts。
- 优化 microbial pathways。
- 提高 stress tolerance。
- 扩展 substrate range。
- 从 biomass/waste/C1 compounds 做 sustainable biomanufacturing。
- drug discovery：antibodies、nanobodies、binding proteins、biosensors。
- 理解 structure-function relationships、fitness landscapes、epistasis。

## [[16 常见考试 答题模式|16. 常见考试/答题模式]]

### [[16-01 pKa charge state 题|16.1 pKa/charge state 题]]

步骤：

1. 写出所有 ionisable groups。
2. 标出给定 pKa。
3. 用 pH 与 pKa 比较判断主要质子化状态。
4. 若要求比例，用 Henderson-Hasselbalch。
5. 若在 protein environment 中，判断 charged/protonated/deprotonated form 是否被稳定。

常见陷阱：

- 忽略 termini。
- 只用 textbook pKa，不考虑 salt bridge/apolar environment。
- 把 His、Cys 这类接近 physiological pH 的 residues 判断得过于绝对。

### [[16-02 糖结构题|16.2 糖结构题]]

步骤：

1. 判断 aldose/ketose 和 carbon number。
2. 判断 D/L。
3. 从 Fischer 转 Haworth 时注意哪些 substituents 在上/下。
4. 标出 anomeric carbon。
5. 判断 alpha/beta。
6. 若形成 glycosidic bond，判断 anomeric carbon 是否 free，从而判断 reducing sugar。

### [[16-03 脂质性质题|16.3 脂质性质题]]

优先判断：

- chain length 越长，melting point 越高。
- cis double bonds 越多，packing 越差，melting point 越低。
- saturated fats 更可能固体，unsaturated oils 更可能液体。
- charged/large polar molecules 不能自由过膜。

### [[16-04 Kd MM kinetics 题|16.4 Kd/MM kinetics 题]]

Kd：

- Kd = [P][L]/[PL]。
- Kd 小，binding 强。
- 90% bound 近似需要 [L]free = 9Kd，但 high [P] 时要考虑 mass balance。

MM：

- 读 Vmax plateau。
- Km 是 half-maximal velocity 对应的 [S]。
- kcat = Vmax/[E]T。
- 比较 enzyme efficiency 常用 kcat/Km。

### [[16-05 Enzyme mechanism 题|16.5 Enzyme mechanism 题]]

答题结构：

1. 画 substrate/product/intermediate。
2. 指出 acid/base/nucleophile/electrophile。
3. 画或描述 transition state charge distribution。
4. 说明 enzyme 如何 stabilise transition state。
5. mutation to Ala 时区分 kcat 与 Km 的影响。
6. 若设计 TSA，说明它模仿了哪些 TS 特征、缺少哪些动态/反应特征。

### [[16-06 PCR primer 题|16.6 PCR/primer 题]]

步骤：

1. 确认 target sequence 方向。
2. forward primer 取目标 5' 端序列，写 5'->3'。
3. reverse primer 取目标 3' 端的 reverse complement，写 5'->3'。
4. 用 Tm = 2(A+T)+4(G+C) 粗略估算。
5. 检查两个 primers Tm 是否相近。

### [[16-07 Recombinant protein production 题|16.7 Recombinant protein production 题]]

从 gene sequence 到 protein：

1. 设计/合成或 PCR amplify GOI。
2. clone into plasmid with ORI, selection marker, promoter, RBS, terminator。
3. transform host，例如 E. coli。
4. select transformants on antibiotics。
5. induce/express protein。
6. lyse cells 或收集分泌产物。
7. purify protein。
8. verify identity/activity。

### [[16-08 Evolution engineering 题|16.8 Evolution/engineering 题]]

区分：

- natural evolution：环境中突变和选择长期发生。
- ALE：在实验室控制 microbial environment，让 selection 富集适应性突变。
- directed evolution：人工生成 gene/protein library，screen/select desired protein function。
- rational design：基于结构/机制直接设计突变，常与 DE 结合。

## [[17 一页总复习|17. 一页总复习]]

必须熟练的公式：

```text
pH = pKa + log([A-]/[HA])
Kd = [P][L]/[PL]
v = kcat [E]T [S] / (Km + [S])
Vmax = kcat [E]T
catalytic efficiency = kcat/Km
Primer Tm approx. = 2(A+T) + 4(G+C)
```

必须能解释的概念：

- hydrophobic effect 是 entropy-driven。
- buffer 在 pH = pKa 附近最有效。
- protein fold environment 可大幅改变 pKa。
- L-amino acids、D-sugars 的生物偏好。
- peptide/glycosidic/phosphodiester bonds 的方向性。
- anomer、mutarotation、reducing sugar。
- cis unsaturation 降低 fatty acid melting point。
- membrane selective permeability。
- enzyme specificity 来自 active site geometry。
- cofactors 扩展 amino acids 的有限反应性。
- allostery 通过 R/T states 改变活性。
- competitive inhibition：Vmax unchanged, apparent Km increased。
- DNA -> RNA -> protein 的分子参与者。
- PCR primers 必须写 5'->3'。
- plasmid features: ORI, marker, GOI/regulatory elements。
- CRISPR-Cas9 = guide RNA targeting + Cas9 cutting。
- ALE 作用于 whole organism fitness；DE 作用于 protein/gene function screening。

最重要的跨章节连接：

- 水环境决定 pH/pKa、疏水效应和 membrane formation。
- amino acid sequence 决定 folding，但 function 需要 dynamics。
- enzyme catalysis 依赖 protein structure、cofactors 和 transition state stabilization。
- DNA sequence 变化会影响 protein sequence/function，从而产生 evolution 或 engineering outcome。
- biotechnology 本质上是把 molecular biology、enzyme chemistry 和 evolution principles 组合使用。
