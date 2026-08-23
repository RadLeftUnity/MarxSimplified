import React, { useState, useEffect } from 'react';
import {
  allCountries,
  getCountryById,
  CATEGORY_LABELS,
  type CountryCategory,
} from '../data/history';
import { TimelineView } from '../components/TimelineView';
import { FormattedText } from '../components/FormattedText';
import {
  Search as SearchIcon,
  X,
  ArrowLeft,
  BookOpen,
  Globe,
  Landmark,
  FileText,
  ExternalLink,
  ChevronRight,
  Shield,
  ShieldAlert,
  Compass,
  Users,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ArrowRight,
  Clock,
  Zap,
} from 'lucide-react';

interface HistoryProps {
  onBackToLibrary?: () => void;
}

function getTruncatedMarkdown(text: string, maxLength: number = 165): string {
  if (!text) return '';
  const firstParagraph = text.split(/\n\s*\n/)[0].trim();
  if (firstParagraph.length <= maxLength) return firstParagraph;
  
  let truncated = firstParagraph.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 0) {
    truncated = truncated.slice(0, lastSpace);
  }
  return `${truncated}...`;
}

function getFallbackContradictions(country: { category: CountryCategory; isHistoricState?: boolean; contradictions?: string[] }): string[] {
  if (country.contradictions && country.contradictions.length > 0) {
    return country.contradictions;
  }

  // Historic Socialist States
  if (country.isHistoricState && (country.category === 'aes' || (country as any).categories?.includes('former-aes'))) {
    return [
      'Administrative technocracy alienated factory workers, leading to decreased labor productivity and social alienation, while imperialist propaganda apparatuses like Radio Free Europe and CIA covert media explicitly exploited this friction to frame capitalist restoration as democratic liberation.',
      'Unilateral Western military encirclement forced massive capital diversion into heavy defense, leading to light consumer commodity shortages, which US imperialist strategists explicitly weaponized to pressure public planned infrastructure.',
      'Introducing market self-financing created corrupt party-state enterprise managers, leading to black-market capital accumulation, which Western intelligence and financial institutions exploited to orchestrate 1990s privatization.',
      'Uneven regional economic development led to nationalist splits and fractured diplomatic solidarity, which imperialist intelligence agencies exploited to isolate individual nations and enforce IMF structural adjustment.'
    ];
  }

  // Active AES / Socialist States
  if (country.category === 'aes') {
    return [
      'Integrating market mechanisms builds productive forces, but leads to emerging private wealth and class stratification, while imperialist entities leverage international trade channels to cultivate domestic lobbies demanding deregulation.',
      'Unilateral US blockades restrict foreign currency reserves, leading to supply bottlenecks in medicine and tech, while imperialist media weaponize these artificially engineered shortages to manufacture anti-government unrest.',
      'Private capital accumulation risks breeding technocratic managers seeking integration with global finance, which imperialist NGOs and think tanks actively target with color revolution strategies.',
      'Maintaining socialist development requires firm party anti-corruption campaigns, leading to tension with international corporate investors, which imperialist states exploit to accuse sovereign nations of authoritarian interference.'
    ];
  }

  // Global South / Anti-Imperialist States
  if (country.category === 'global-south') {
    return [
      'Structural dependency on exporting raw commodities leaves national budgets vulnerable to foreign price shocks, leading to severe inflation, while the IMF and World Bank exploit these economic crises to demand privatization of sovereign oil, mineral, and utility assets.',
      'Elite ownership of press networks disseminates anti-worker propaganda, leading to fragmented working-class solidarity, while US NED and CIA soft-power initiatives exploit these media channels to finance comprador opposition parties.',
      'Domestic capitalists allied with foreign monopolies hoard food supplies and orchestrate capital flight, leading to artificial economic paralysis, while imperialist intelligence services coordinate directly with these oligarchs to organize military coups.',
      'Sovereign anti-imperialist leadership protects national territory from NATO military bases, yet internal capitalist property relations persist, which imperialist forces exploit to infiltrate trade unions and divide popular movements.'
    ];
  }

  // Global North / Imperial Core States
  return [
    'Real wage stagnation and corporate monopoly price-gouging lead to systemic housing crises, medical debt, and declining living standards, which oligarchic ruling classes exploit to enforce labor discipline and suppress unionization.',
    'Capitalist monopolies extract super-profits from Global South resource exploitation, leading to funded social concessions that historically pacified domestic labor aristocracies, which ruling elites roll back as Western imperial hegemony declines.',
    'Systemic racialized and anti-immigrant propaganda is aggressively promoted by ruling elites, leading to fragmented working-class solidarity, which imperialist state apparatuses exploit to divert public anger away from capitalist monopolies.',
    'Expanding war budgets and speculative finance starve public health and municipal infrastructure, leading to decaying social services, which imperialist defense contractors and Wall Street monopolies exploit to extract public revenue.'
  ];
}

export const History: React.FC<HistoryProps> = ({ onBackToLibrary }) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CountryCategory | 'all'>('all');
  const [selectedIdeology, setSelectedIdeology] = useState<string>('all');
  const [stateStatusFilter, setStateStatusFilter] = useState<'all' | 'active' | 'historic'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'ideology' | 'era'>('name-asc');
  const [mainTab, setMainTab] = useState<'timeline' | 'overview' | 'geopolitics' | 'contradictions' | 'sources'>('timeline');

  // Handle URL hash navigation (e.g. #country-cuba)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('country-')) {
        const countryId = hash.replace('country-', '');
        setSelectedCountryId(countryId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectCountry = (id: string) => {
    setSelectedCountryId(id);
    window.location.hash = `country-${id}`;
  };

  const handleClearCountry = () => {
    setSelectedCountryId(null);
    window.location.hash = '';
  };

  const handleResetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedIdeology('all');
    setStateStatusFilter('all');
    setSortBy('name-asc');
  };

  // Collect available unique ideologies for filter dropdown
  const availableIdeologies = Array.from(
    new Set(allCountries.map((c) => c.governingIdeology).filter(Boolean) as string[])
  ).sort();

  // Filter and sort country archive
  const filteredCountries = allCountries
    .filter((country) => {
      // Category Filter
      if (selectedCategory !== 'all') {
        const categories = country.categories || [country.category];
        if (!categories.includes(selectedCategory)) return false;
      }

      // State Status Filter
      if (stateStatusFilter === 'active' && country.isHistoricState) return false;
      if (stateStatusFilter === 'historic' && !country.isHistoricState) return false;

      // Ideology Filter
      if (selectedIdeology !== 'all' && country.governingIdeology !== selectedIdeology) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = country.name.toLowerCase().includes(q);
        const matchShort = country.shortName.toLowerCase().includes(q);
        const matchLeaders = country.keyLeaders.some((l) => l.toLowerCase().includes(q));
        const matchIdeology = country.governingIdeology?.toLowerCase().includes(q) ?? false;
        const matchOverview = country.overviewText.toLowerCase().includes(q);
        const matchParty = country.governingParty?.toLowerCase().includes(q) ?? false;
        return matchName || matchShort || matchLeaders || matchIdeology || matchOverview || matchParty;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'ideology') return (a.governingIdeology || '').localeCompare(b.governingIdeology || '');
      if (sortBy === 'era') return (a.era || '').localeCompare(b.era || '');
      return 0;
    });

  const activeCountry = selectedCountryId ? getCountryById(selectedCountryId) : null;

  return (
    <div className={`history-page-wrapper ${activeCountry ? 'detail-mode' : 'catalog-mode'}`}>
      {/* Top Header Bar */}
      <header className="history-header">
        <div className="history-header-left">
          <button className="btn-back-library" onClick={activeCountry ? handleClearCountry : onBackToLibrary}>
            <ArrowLeft className="btn-icon" />
            <span>{activeCountry ? 'Back to State & Country Archive' : 'Back to Library'}</span>
          </button>
        </div>
        {activeCountry && (
          <div className="history-header-title">
            {activeCountry.flagUrl ? (
              <img
                src={activeCountry.flagUrl}
                alt={`${activeCountry.name} Flag`}
                className="country-flag-inline-img"
                style={{ width: '28px', height: '19px', marginRight: '10px' }}
                onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
              />
            ) : (
              <span className="country-flag-inline" style={{ marginRight: '10px', fontSize: '1.4rem' }}>{activeCountry.flagEmoji}</span>
            )}
            <h1>{activeCountry.name}</h1>
          </div>
        )}
      </header>

      {/* Main Container */}
      {activeCountry ? (
        /* Detailed Country View Layout */
        <div className="country-detail-container">
          {/* Left Column: Fixed Compact Metadata Sidebar */}
          <aside className="country-sidebar-pane">
            {activeCountry.coverImage && (
              <div className="sidebar-background-hero">
                <img
                  src={activeCountry.coverImage}
                  alt=""
                  className="sidebar-hero-bg-img"
                  onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none'; }}
                />
                <div className="sidebar-hero-gradient-overlay" />
              </div>
            )}

            <div className="country-header-badge-row">
              <span className={`country-category-pill category-${activeCountry.category}`}>
                {CATEGORY_LABELS[activeCountry.category]?.label || activeCountry.category}
              </span>
              {activeCountry.officialGovUrl && (
                <a
                  href={activeCountry.officialGovUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="compact-gov-link-pill"
                  title={`Official Government Portal for ${activeCountry.name}`}
                >
                  <Globe className="btn-tiny-icon text-gold" />
                  <span>Gov Site</span>
                  <ExternalLink className="btn-tiny-icon" />
                </a>
              )}
            </div>

            <div className="country-title-row">
              <span className="country-flag-inline">
                {activeCountry.flagUrl ? (
                  <img
                    src={activeCountry.flagUrl}
                    alt={`${activeCountry.name} Flag`}
                    className="country-flag-inline-img"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerText = activeCountry.flagEmoji;
                      }
                    }}
                  />
                ) : (
                  activeCountry.flagEmoji
                )}
              </span>
              <h2 className="country-title">{activeCountry.name}</h2>
            </div>
            <p className="country-era-subtitle">{activeCountry.era}</p>

            <div className="sidebar-info-banners-container">
              <div className="sidebar-info-banner party-banner">
                <div className="banner-header">
                  <Shield className="banner-icon" />
                  <span>{activeCountry.isHistoricState ? 'Historic Governing Party' : 'Current Governing Party'}</span>
                </div>
                <div className="banner-content">
                  <FormattedText text={activeCountry.governingParty || 'State Administration'} />
                </div>
              </div>

              <div className="sidebar-info-banner ideology-banner">
                <div className="banner-header">
                  <Compass className="banner-icon" />
                  <span>{activeCountry.isHistoricState ? 'Historic Economic System' : 'Economic System'}</span>
                </div>
                <div className="banner-content">
                  <FormattedText text={activeCountry.governingIdeology || 'Capitalism'} />
                </div>
              </div>
            </div>

            {activeCountry.counterpartInfo && (
              <div className="counterpart-comparison-box">
                <div className="counterpart-header">
                  <RefreshCw className="btn-tiny-icon text-gold" />
                  <span className="counterpart-label">{activeCountry.counterpartInfo.label}</span>
                </div>
                <div className="counterpart-body">
                  <button
                    className="counterpart-link-btn"
                    onClick={() => handleSelectCountry(activeCountry.counterpartInfo!.id)}
                  >
                    <span>{activeCountry.counterpartInfo.name}</span>
                    <ArrowRight className="btn-tiny-icon" />
                  </button>
                  <p className="counterpart-contrast-text">
                    {activeCountry.counterpartInfo.contrastText}
                  </p>
                </div>
              </div>
            )}
          </aside>

          {/* Right Column: Main Detail Content Pane */}
          <main className="country-main-content-pane">
            {/* Top Main Tab Bar */}
            <div className="main-pane-tabs-bar">
              <button
                className={`main-pane-tab-btn ${mainTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setMainTab('timeline')}
              >
                <Clock className="btn-small-icon" />
                <span>Timeline and History</span>
                <span className="tab-count-badge">{activeCountry.timeline.length}</span>
              </button>

              <button
                className={`main-pane-tab-btn ${mainTab === 'overview' ? 'active' : ''}`}
                onClick={() => setMainTab('overview')}
              >
                <BookOpen className="btn-small-icon" />
                <span>Overview</span>
              </button>

              <button
                className={`main-pane-tab-btn ${mainTab === 'geopolitics' ? 'active' : ''}`}
                onClick={() => setMainTab('geopolitics')}
              >
                <Shield className="btn-small-icon" />
                <span>Imperialism / Allies</span>
              </button>

              <button
                className={`main-pane-tab-btn ${mainTab === 'contradictions' ? 'active' : ''}`}
                onClick={() => setMainTab('contradictions')}
              >
                <Zap className="btn-small-icon" />
                <span>Analysis</span>
                <span className="tab-count-badge">
                  {(activeCountry.contradictions || getFallbackContradictions(activeCountry)).length}
                </span>
              </button>

              <button
                className={`main-pane-tab-btn ${mainTab === 'sources' ? 'active' : ''}`}
                onClick={() => setMainTab('sources')}
              >
                <FileText className="btn-small-icon" />
                <span>Sources</span>
                <span className="tab-count-badge">{activeCountry.sources.length}</span>
              </button>
            </div>

            {/* Main Pane Viewport Content */}
            <div className="main-pane-content-viewport">
              {mainTab === 'timeline' && (
                <TimelineView timeline={activeCountry.timeline} sources={activeCountry.sources} />
              )}

              {mainTab === 'overview' && (
                <div className="tab-pane-fade main-pane-overview-container">
                  {activeCountry.coverImage && (
                    <div className="country-cover-image-wrapper">
                      <img
                        src={activeCountry.coverImage}
                        alt={`${activeCountry.shortName} Historical Art`}
                        className="country-cover-image"
                      />
                    </div>
                  )}
                  <div className="country-overview-box glass-panel">
                    <span className="box-section-label">
                      <BookOpen className="section-icon text-gold" /> Educational Historical Analysis and Overview
                    </span>
                    <FormattedText text={activeCountry.overviewText} paragraphClassName="country-overview-paragraph" />
                  </div>
                </div>
              )}

              {mainTab === 'geopolitics' && (
                <div className="tab-pane-fade main-pane-geopolitics-container">
                  <div className="country-imperialism-box glass-panel">
                    <span className="box-section-label">
                      <ShieldAlert className="section-icon text-gold" /> Imperialist Interference and Targeting
                    </span>
                    <FormattedText
                      text={
                        activeCountry.geopolitics?.imperialismDetails ||
                        (activeCountry.category === 'global-north'
                          ? `${activeCountry.shortName} acts as a primary imperialist power in the Global North, deploying unilateral economic sanctions, military base networks, and financial institutions to extract resources and labor from sovereign nations.`
                          : `${activeCountry.shortName} faces ongoing or historical imperialist pressure, foreign sanctions regimes, asset seizures, and interventionist attempts aimed at subverting its sovereign economic and political self-determination.`)
                      }
                      paragraphClassName="country-overview-paragraph"
                    />
                  </div>

                  {((activeCountry.geopolitics?.imperialismLinks && activeCountry.geopolitics.imperialismLinks.length > 0) ||
                    activeCountry.sources.some((s) => s.url)) && (
                    <div className="country-imperialism-links-box glass-panel">
                      <span className="box-section-label">
                        <ExternalLink className="section-icon text-gold" /> Imperialism Reports and Documentation Links
                      </span>
                      <div className="imperialism-links-list">
                        {(activeCountry.geopolitics?.imperialismLinks ||
                          activeCountry.sources
                            .filter((s) => s.url)
                            .slice(0, 4)
                            .map((s) => ({
                              label: s.label,
                              url: s.url!,
                              publisher: s.publisher,
                              description: s.excerpt,
                            }))
                        ).map((link, idx) => (
                          <div key={idx} className="imperialism-link-card glass-panel">
                            <div className="link-card-header">
                              <span className="link-card-title">{link.label}</span>
                              {link.publisher && <span className="link-card-pub">{link.publisher}</span>}
                            </div>
                            {link.description && <p className="link-card-desc">{link.description}</p>}
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="source-url-link"
                            >
                              <span>Open Imperialism Document</span>
                              <ExternalLink className="btn-small-icon" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="country-allies-enemies-box glass-panel">
                    <span className="box-section-label">
                      <Users className="section-icon text-gold" /> Geopolitical Allies, Opponents and Blocs
                    </span>

                    <div className="relation-group">
                      <span className="relation-group-title text-success">
                        <CheckCircle2 className="group-title-icon text-success" /> Primary Allies and Solidarity Partners:
                      </span>
                      <div className="relation-tags-cloud">
                        {(
                          activeCountry.geopolitics?.allies ||
                          (activeCountry.category === 'aes'
                            ? ['Cuba', 'China', 'Russia', 'Vietnam', 'DPRK', 'BRICS+', 'Non-Aligned Movement']
                            : activeCountry.category === 'global-south'
                            ? ['BRICS+', 'Non-Aligned Movement', 'ALBA-TCP', 'Global South Coalition']
                            : ['NATO Alliance', 'G7 Imperial Core', 'AUKUS Bloc'])
                        ).map((ally, idx) => (
                          <span key={idx} className="relation-tag ally-tag">
                            {ally}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relation-group" style={{ marginTop: '16px' }}>
                      <span className="relation-group-title text-danger">
                        <AlertCircle className="group-title-icon text-danger" /> Imperialist Opponents and Hostile Forces:
                      </span>
                      <div className="relation-tags-cloud">
                        {(
                          activeCountry.geopolitics?.enemies ||
                          (activeCountry.category === 'global-north'
                            ? ['Sovereign Global South', 'Anti-Imperialist Liberation Blocs', 'Socialist States']
                            : ['US Department of State', 'US AFRICOM / Southern Command', 'EU Sanctions Regime', 'IMF / World Bank'])
                        ).map((enemy, idx) => (
                          <span key={idx} className="relation-tag enemy-tag">
                            {enemy}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {mainTab === 'contradictions' && (
                <div className="tab-pane-fade main-pane-contradictions-container">
                  <div className="country-contradictions-box glass-panel">
                    <span className="box-section-label">
                      <Zap className="section-icon text-gold" /> Analysis
                    </span>
                    <p className="contradictions-intro-note">
                      A materialist analysis detailing internal class tensions, economic vulnerabilities, key historical developments, political figures, and imperialist dynamics.
                    </p>
                    <ul className="contradictions-list">
                      {(activeCountry.contradictions && activeCountry.contradictions.length > 0
                        ? activeCountry.contradictions
                        : getFallbackContradictions(activeCountry)
                      ).map((item, idx) => (
                        <li key={idx} className="contradiction-item-card glass-panel">
                          <span className="contradiction-bullet-num">{idx + 1}</span>
                          <div className="contradiction-text-content">
                            <FormattedText text={item} paragraphClassName="contradiction-paragraph" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {mainTab === 'sources' && (
                <div className="tab-pane-fade main-pane-sources-container">
                  <div className="country-sources-box glass-panel">
                    <span className="box-section-label">
                      <FileText className="section-icon text-gold" /> Master Citations and Source Archive
                    </span>
                    <div className="sources-list">
                      {activeCountry.sources.map((source) => (
                        <div key={source.id} className="source-item">
                          <span className="source-num">[{source.id}]</span>
                          <div className="source-details">
                            <span className="source-label-text">{source.label}</span>
                            {source.publisher && (
                              <span className="source-sub-text">
                                {source.publisher} {source.year ? `(${source.year})` : ''}
                              </span>
                            )}
                            {source.url && (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="source-url-link"
                              >
                                <span>Open Document</span>
                                <ExternalLink className="btn-small-icon" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      ) : (
        /* State Catalog Split Grid View */
        <div className="history-catalog-layout-grid">
          {/* Left Column: Filter and Search Controls Sidebar */}
          <aside className="history-catalog-sidebar glass-panel">
            {/* Search Box */}
            <div className="sidebar-section">
              <span className="sidebar-section-label">Search Nations</span>
              <div className="glossary-search-box">
                <SearchIcon className="library-search-icon" />
                <input
                  type="text"
                  className="library-search-input"
                  placeholder="Search countries, leaders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="history-search-input"
                />
                {searchQuery && (
                  <button className="glossary-search-clear-btn" onClick={() => setSearchQuery('')} title="Clear search">
                    <X className="btn-small-icon" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="sidebar-section">
              <span className="sidebar-section-label">Category / Region</span>
              <div className="filter-pills-column">
                {(Object.keys(CATEGORY_LABELS) as Array<CountryCategory | 'all'>).map((cat) => {
                  const info = CATEGORY_LABELS[cat];
                  return (
                    <button
                      key={cat}
                      className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <span>{info.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* State Status Filter */}
            <div className="sidebar-section">
              <span className="sidebar-section-label">State Status</span>
              <div className="filter-pills-column">
                <button
                  className={`filter-pill-btn ${stateStatusFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setStateStatusFilter('all')}
                >
                  All Nations ({allCountries.length})
                </button>
                <button
                  className={`filter-pill-btn ${stateStatusFilter === 'active' ? 'active' : ''}`}
                  onClick={() => setStateStatusFilter('active')}
                >
                  Active States ({allCountries.filter((c) => !c.isHistoricState).length})
                </button>
                <button
                  className={`filter-pill-btn ${stateStatusFilter === 'historic' ? 'active' : ''}`}
                  onClick={() => setStateStatusFilter('historic')}
                >
                  Historic States ({allCountries.filter((c) => c.isHistoricState).length})
                </button>
              </div>
            </div>

            {/* Economic System Selector */}
            <div className="sidebar-section">
              <span className="sidebar-section-label">Economic System</span>
              <select
                className="history-filter-select"
                value={selectedIdeology}
                onChange={(e) => setSelectedIdeology(e.target.value)}
                id="history-ideology-select"
              >
                <option value="all">All Economic Systems</option>
                {availableIdeologies.map((ideo) => (
                  <option key={ideo} value={ideo}>
                    {ideo}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Order */}
            <div className="sidebar-section">
              <span className="sidebar-section-label">Sort Order</span>
              <select
                className="history-filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                id="history-sort-select"
              >
                <option value="name-asc">Sort: Name (A – Z)</option>
                <option value="name-desc">Sort: Name (Z – A)</option>
                <option value="ideology">Sort: Economic System</option>
                <option value="era">Sort: Historical Era</option>
              </select>
            </div>

            {/* Reset Filters */}
            {(selectedCategory !== 'all' || selectedIdeology !== 'all' || stateStatusFilter !== 'all' || searchQuery || sortBy !== 'name-asc') && (
              <button className="btn-back-library" onClick={handleResetAllFilters} style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                <X className="btn-small-icon" /> Reset All Filters
              </button>
            )}
          </aside>

          {/* Right Column: Cards Grid Header and Grid */}
          <main className="history-catalog-main-content">
            <div className="history-stats-bar">
              <span className="history-stats-count">
                Showing <strong>{filteredCountries.length}</strong> of {allCountries.length} nations
                {selectedCategory !== 'all' && ` • Category: ${CATEGORY_LABELS[selectedCategory]?.label}`}
                {selectedIdeology !== 'all' && ` • Ideology: ${selectedIdeology}`}
                {stateStatusFilter !== 'all' && ` • Status: ${stateStatusFilter}`}
                {searchQuery && ` • Search: "${searchQuery}"`}
              </span>
            </div>

            {/* Country Cards Grid */}
            <div className="country-cards-grid">
              {filteredCountries.length === 0 ? (
                <div className="glossary-empty-state glass-panel" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px' }}>
                  <h3>No matching country histories found</h3>
                  <p style={{ margin: '8px 0 16px', color: 'var(--text-secondary)' }}>
                    No countries match your current search "{searchQuery}" or active category filter.
                  </p>
                  <button
                    className="nav-footer-btn"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setStateStatusFilter('all');
                    }}
                    style={{ margin: '0 auto' }}
                  >
                    Reset Search and Filters
                  </button>
                </div>
              ) : (
                filteredCountries.map((country) => (
                  <div
                    key={country.id}
                    className="country-card glass-panel card-hover-effect"
                    onClick={() => handleSelectCountry(country.id)}
                    id={`country-card-${country.id}`}
                  >
                    {country.coverImage && (
                      <div className="card-image-container">
                        {country.isHistoricState && (
                          <span className="card-historic-badge">
                            <Landmark style={{ width: 11, height: 11 }} /> Historic State
                          </span>
                        )}
                        <img src={country.coverImage} alt={country.name} className="card-cover-img" />
                        <div className="card-image-overlay" />

                        <div className={`country-card-fixed-banner category-banner-${country.category}`}>
                          <div className="banner-categories-list">
                            {(country.categories || [country.category]).map((cat) => (
                              <span key={cat} className="banner-category-tag">
                                {CATEGORY_LABELS[cat]?.label || 'State History'}
                              </span>
                            ))}
                          </div>
                          <span className="banner-era-tag">{country.era}</span>
                        </div>
                      </div>
                    )}

                    <div className="card-content-body">
                      <div className="card-title-row">
                        <span className="card-flag-inline">
                          {country.flagUrl ? (
                            <img
                              src={country.flagUrl}
                              alt={`${country.name} Flag`}
                              className="card-flag-inline-img"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                  target.parentElement.innerText = country.flagEmoji;
                                }
                              }}
                            />
                          ) : (
                            country.flagEmoji
                          )}
                        </span>
                        <h3 className="card-country-name">{country.name}</h3>
                      </div>

                      <div className="card-blurb-text">
                        <FormattedText text={getTruncatedMarkdown(country.overviewText, 140)} highlightJargon={false} />
                      </div>

                      <div className="card-footer-action">
                        <span className="action-text">Explore Timeline and History</span>
                        <ChevronRight className="btn-small-icon" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  );
};
