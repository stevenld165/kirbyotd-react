--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.1

-- Started on 2025-01-12 07:27:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16393)
-- Name: copy_abilities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.copy_abilities (
    copy_id smallint NOT NULL,
    ability character varying(50) NOT NULL,
    img character varying(255) NOT NULL
);


ALTER TABLE public.copy_abilities OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16410)
-- Name: daily_records; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.daily_records (
    record_id integer NOT NULL,
    copy_id smallint,
    record_date date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.daily_records OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16409)
-- Name: daily_records_record_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.daily_records_record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.daily_records_record_id_seq OWNER TO postgres;

--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 218
-- Name: daily_records_record_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.daily_records_record_id_seq OWNED BY public.daily_records.record_id;


--
-- TOC entry 3214 (class 2604 OID 16413)
-- Name: daily_records record_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_records ALTER COLUMN record_id SET DEFAULT nextval('public.daily_records_record_id_seq'::regclass);


--
-- TOC entry 3366 (class 0 OID 16393)
-- Dependencies: 217
-- Data for Name: copy_abilities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.copy_abilities (copy_id, ability, img) FROM stdin;
1	Animal	https://cdn.wikirby.com/a/a1/AnimalKirby.png
2	Archer	https://cdn.wikirby.com/3/3e/KTD_Archer_artwork.png
3	Artist	https://cdn.wikirby.com/0/02/KSA_Artist_Artwork.png
4	Backdrop	https://cdn.wikirby.com/a/a1/KNiDL_Backdrop_artwork.png
5	Ball	https://cdn.wikirby.com/3/31/KNiDL_Ball_Kirby_artwork.png
6	Balloon	https://cdn.wikirby.com/9/9d/Balloon_Kirby.png
7	Beam	https://cdn.wikirby.com/a/af/KRtDLD_Beam.png
8	Beetle	https://cdn.wikirby.com/d/db/KTD_Beetle.png
9	Bell	https://cdn.wikirby.com/5/59/KTD_Bell.png
10	Bomb	https://cdn.wikirby.com/3/37/KRtDLD_Bomb.png
11	Bubble	https://cdn.wikirby.com/a/a2/Kirby_Bubble_Art_SS.png
12	Burning	https://cdn.wikirby.com/2/23/KNiDL_Burning_artwork.png
13	Circus	https://cdn.wikirby.com/a/a1/KTD_Circus_artwork.png
14	Cleaning	https://cdn.wikirby.com/d/dd/KSA_Cleaning_Artwork.png
15	Cook	https://cdn.wikirby.com/7/78/KSA_Cook_Artwork.png
16	Copy	https://cdn.wikirby.com/8/8e/KSSU_Copy_artwork.png
17	Crash	https://cdn.wikirby.com/4/4b/KRtDLD_Crash.png
18	Cupid	https://cdn.wikirby.com/9/96/KSqS_Cupid_Kirby_Artwork.png
19	Cutter	https://cdn.wikirby.com/a/a3/KRtDLD_Cutter.png
20	Doctor	https://cdn.wikirby.com/2/24/KPR_Doctor_artwork.png
21	Drill	https://cdn.wikirby.com/0/0c/KatFL_Drill_Kirby_artwork.png
22	ESP	https://cdn.wikirby.com/5/59/KPR_ESP_artwork.png
23	Festival	https://cdn.wikirby.com/8/8c/KRtDLD_Festival.png
24	Fighter	https://cdn.wikirby.com/3/31/KRtDLD_Fighter.png
25	Fire	https://cdn.wikirby.com/8/87/KRtDLD_Fire.png
26	Freeze	https://cdn.wikirby.com/c/c2/Freeze_KAR.png
27	Ghost	https://cdn.wikirby.com/2/24/KSqS_Ghost_Kirby_Artwork.png
28	Hammer	https://cdn.wikirby.com/7/7b/KRtDLD_Hammer.png
29	Hi-Jump	https://cdn.wikirby.com/1/1b/KRtDLD_Hi-Jump.png
30	Ice	https://cdn.wikirby.com/7/72/KRtDLD_Ice.png
31	Jelly	https://cdn.wikirby.com/6/6f/KDB_Jelly_Kirby_artwork.png
32	Jet	https://cdn.wikirby.com/d/d8/KSSU_Jet_Artwork.png
33	Laser	https://cdn.wikirby.com/8/89/Laser_Squeak.png
34	Leaf	https://cdn.wikirby.com/0/0d/KRtDLD_Leaf.png
35	Light	https://cdn.wikirby.com/b/be/KNiDL_Light_artwork.png
36	Magic	https://cdn.wikirby.com/c/c3/KSqSArtMagic.png
37	Mecha	https://cdn.wikirby.com/2/23/KRtDLD_Mecha.png
38	Metal	https://cdn.wikirby.com/9/9d/Metal_Kirby.png
39	Mike	https://cdn.wikirby.com/a/a1/KRtDLD_Mike.png
40	Mini	https://cdn.wikirby.com/8/8a/KatAMArtMini.png
41	Mirror	https://cdn.wikirby.com/c/cd/KPR_Mirror_artwork.png
42	Missile	https://cdn.wikirby.com/9/9d/MissileAbility.png
43	Needle	https://cdn.wikirby.com/b/b2/KRtDLD_Needle.png
44	Ninja	https://cdn.wikirby.com/0/0c/KRtDLD_Ninja.png
45	Paint	https://cdn.wikirby.com/6/68/KSSU_Paint_Kirby_Artwork.png
46	Parasol	https://cdn.wikirby.com/d/da/KRtDLD_Parasol.png
47	Plasma	https://cdn.wikirby.com/1/18/PlasmaKSSU.png
48	Poison	https://cdn.wikirby.com/b/bd/KPR_Poison_artwork.png
49	Ranger	https://cdn.wikirby.com/1/14/KatFL_Ranger_Kirby_artwork.png
50	Sand	https://cdn.wikirby.com/b/ba/KRtDLD_Sand.png
51	Sleep	https://cdn.wikirby.com/1/10/KRtDLD_Sleep.png
52	Smash Bros.	https://cdn.wikirby.com/e/e3/Final_Cutter.png
53	Spark	https://cdn.wikirby.com/4/4f/KRtDLD_Spark.png
54	Spear	https://cdn.wikirby.com/1/11/KRtDLD_Spear.png
55	Spider	https://cdn.wikirby.com/f/fd/KSA_Spider_Artwork.png
56	Staff	https://cdn.wikirby.com/2/20/KSA_Staff_artwork.png
57	Stone	https://cdn.wikirby.com/d/da/KRtDLD_Stone.png
58	Suplex	https://cdn.wikirby.com/5/59/KSSU_Suplex_Kirby_artwork.png
59	Sword	https://cdn.wikirby.com/b/bd/KRtDLD_Sword.png
60	Throw	https://cdn.wikirby.com/7/74/KSqS_Throw_Kirby_Artwork.png
61	Tornado	https://cdn.wikirby.com/1/17/KRtDLD_Tornado.png
62	UFO	https://cdn.wikirby.com/7/77/UFO.png
63	Water	https://cdn.wikirby.com/1/1e/KRtDLD_Water.png
64	Wheel	https://cdn.wikirby.com/5/50/KSSU_Wheel_Kirby_Artwork.png
65	Whip	https://cdn.wikirby.com/9/95/KRtDLD_Whip.png
66	Wing	https://cdn.wikirby.com/8/81/KRtDLD_Wing.png
67	Wrestler	https://cdn.wikirby.com/e/ec/KF2_Wrestler_artwork.png
68	Yo-Yo	https://cdn.wikirby.com/0/05/KSA_Yo-Yo_Kirby_Artwork.png
\.


--
-- TOC entry 3368 (class 0 OID 16410)
-- Dependencies: 219
-- Data for Name: daily_records; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.daily_records (record_id, copy_id, record_date) FROM stdin;
\.


--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 218
-- Name: daily_records_record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.daily_records_record_id_seq', 80, true);


--
-- TOC entry 3217 (class 2606 OID 16397)
-- Name: copy_abilities copy_abilities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.copy_abilities
    ADD CONSTRAINT copy_abilities_pkey PRIMARY KEY (copy_id);


--
-- TOC entry 3219 (class 2606 OID 16416)
-- Name: daily_records daily_records_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_records
    ADD CONSTRAINT daily_records_pkey PRIMARY KEY (record_id);


--
-- TOC entry 3220 (class 2606 OID 16417)
-- Name: daily_records fk_copy_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_records
    ADD CONSTRAINT fk_copy_id FOREIGN KEY (copy_id) REFERENCES public.copy_abilities(copy_id);


-- Completed on 2025-01-12 07:27:37

--
-- PostgreSQL database dump complete
--

