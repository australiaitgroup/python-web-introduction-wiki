-- 创建Cars table
CREATE TABLE lab2.Cars (
    cid INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255),
    color VARCHAR(255),
    TYPE VARCHAR(255),
    price INT,
    year INT,
    sold VARCHAR(255)
);

-- 删除table
DROP TABLE lab2.Cars;

-- 修改table名(f2也行)
ALTER TABLE
    lab2.Cars RENAME TO Cars3 -- 添加一个Column
ALTER TABLE
    Cars
ADD
    COLUMN `工厂` VARCHAR(255) -- 删除一个column
ALTER TABLE
    Cars DROP COLUMN `工厂` -- 插入数据
INSERT INTO
    Cars(`款式`, `品牌`, `颜色`, `类型`, `价格`, `生产年份`, `是否卖出`)
VALUES
    ('Camaro', '雪佛兰', '黄色', '肌肉车', 65000, 2018, '1'),
    ('911', '保驰捷', '红色', '跑车', 20000, 2017, ''),
    ('Escape', '福特', '蓝色', 'SUV', 60000, 2020, '0'),
    ('M3', '特斯拉', '红色', '轿车', 250000, 2018, ''),
    (
        'Carrera',
        'Porsche',
        '红色',
        'sport car',
        240000,
        2013,
        ''
    ),
    ('Camaro', '雪佛兰', '红色', '肌肉车', 60000, 2016, '1'),
    ('Camaro', '雪佛兰', '黄色', '肌肉车', 65000, 2018, ''),
    ('Panamera', '保驰捷', '黑色', '跑车', 200000, 2017, '0'),
    ('Mustang', '福特', '蓝色', '肌肉车', 60000, 2020, ''),
    ('Model S', '特斯拉', '黑色', '轿车', 180000, 2018, '1'),
    (
        'Civic',
        'Toyota',
        'white',
        'sedan',
        25000,
        2016,
        '0'
    ),
    ('Camaro', '雪佛兰', '红色', '肌肉车', 60000, 2016, '0'),
    (
        'Challenger',
        '雪佛兰',
        'Orange',
        '肌肉车',
        70000,
        2018,
        ''
    ),
    ('911', '保驰捷', '红色', '跑车', 200000, 2017, '1'),
    ('Escape', '福特', '蓝色', 'SUV', 60000, 2020, ''),
    ('Model 3', '特斯拉', '红色', '轿车', 250000, 2018, '1'),
    ('Camaro', '雪佛兰', '红色', '肌肉车', 60000, 2016, '1'),
    (
        '120i',
        'BMW',
        '白色',
        'hatchpack',
        40000,
        2012,
        ''
    );

-- 创建Factories table
CREATE TABLE lab2.Factories(
    fid INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `工厂名字` TEXT,
    `地址` TEXT,
    `建造年份` INTEGER,
    `员工数量` INTEGER,
    `主管` TEXT,
    `车间数量` INTEGER,
    `品牌` TEXT
);

-- Factories table添加数据
INSERT INTO
    Factories(工厂名字, 地址, 建造年份, 员工数量, 主管, 车间数量, 品牌)
VALUES
    ('雪佛兰 加州1厂', '美国', 2000, 450, 'James', 20, '雪佛兰'),
    (
        'Toyota 2厂',
        '美国',
        1998,
        700,
        'Asuka',
        30,
        'Toyota'
    ),
    ('特斯拉西雅图分部', '美国', 2003, 600, 'Elon', 30, '特斯拉'),
    ('保驰捷2厂', '德国', 2010, 380, 'Alex', 10, '保驰捷'),
    ('宝马4厂', '德国', 1995, 480, 'Alex', 20, '宝马'),
    ('福特 加州分部', '美国', 1988, 900, 'Rex', 30, '福特');

-- 创建Production table
CREATE TABLE lab2.Production(
    `pid` INT PRIMARY KEY AUTO_INCREMENT,
    `cid` INT NOT NULL,
    `fid` INT NOT NULL,
    `生产日期` TEXT,
    `负责员工` TEXT,
    FOREIGN KEY(`cid`) REFERENCES Cars(`cid`),
    FOREIGN KEY(`fid`) REFERENCES Factories(`fid`)
);

-- Production table添加数据
INSERT INTO
    Production (`cid`, `fid`, `生产日期`, `负责员工`)
VALUES
    (2, 6, '17/12/2020', 'Alex'),
    (5, 4, '18/12/2020', 'Zed'),
    (7, 2, '23/12/2020', 'Lee'),
    (8, 1, '28/12/2020', 'Lin'),
    (13, 2, '1/01/2021', 'Gabriel'),
    (4, 3, '1/01/2021', 'Jason'),
    (15, 4, '2/01/2021', 'Chris'),
    (6, 5, '3/01/2021', 'Mark'),
    (9, 6, '14/01/2021', 'Ron'),
    (18, 6, '16/01/2021', 'Harris');

-- 创建Factories_2 table
CREATE TABLE Factories_2(
    `fid` INT AUTO_INCREMENT,
    `工厂名字` VARCHAR(255),
    `地址` VARCHAR(255) NOT NULL CHECK(`地址` IN ("美国", "德国")),
    `建造年份` INT,
    `员工数量` INT CHECK(`员工数量 ` >= 100),
    `主管` VARCHAR(255),
    `车间数量` INT,
    `品牌` VARCHAR(255) UNIQUE,
    PRIMARY KEY(`fid`)
);